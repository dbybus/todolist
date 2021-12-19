import {table, minifyRecords} from "./utils/Airtable"

export default async (req, res) => {
    const { id } = req.body;
    console.log(id)
    try {
        const deletedRecord = await table.destroy([id]);
        res.statusCode = 200;
        res.json(deletedRecord);
    } catch (error) {
        res.statusCode = 500;
        res.json("Something went wrong", error);
    }
    
}