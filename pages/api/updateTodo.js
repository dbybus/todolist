import {table, minifyRecords} from "./utils/Airtable"

export default async (req, res) => {
    const { id, fields } = req.body;
    console.log("Update controller ",fields)
    try {
        const newFields = { ...fields };
        const updatedRecord = await table.update([{ id, fields: newFields }]);
        res.statusCode = 200;
        res.json(updatedRecord);
    } catch (error) {
        res.statusCode = 500;
        res.json("Something went wrong", error);
    }
    
}