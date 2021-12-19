import auth0 from "../utils/auth0";
import { table } from "../utils/Airtable";

const ownsRecord = (handler) => auth0.withApiAuthRequired(async (req, res) => {
    const user = auth0.getSession(req, res);
    const {id} = req.body;

    try {
        const existingRecord = await table.find(id);
        if(!existingRecord || user.sub === existingRecord.fields.userid){
            res.statusCode = 404;
            return res.json({msg: "Record not found"})
        }
        req.record = existingRecord;
        return handler(req, res);
    } catch (error) {
        console.log(error);
    }
})

export default ownsRecord;