import {table, minifyRecords} from "./utils/Airtable"
import auth0 from "./utils/auth0";
import ownsRecord from "./middleware/OwnRecord";

export default ownsRecord(async (req, res) => {
    const { id } = req.body;

    try {
        const deletedRecord = await table.destroy([id]);
        res.statusCode = 200;
        res.json(deletedRecord);
    } catch (error) {
        res.statusCode = 500;
        res.json("Something went wrong", error);
    }
    
});