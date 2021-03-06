const db = require('../db');
const { assert } = require('chai');
const { ObjectId } = require('mongodb');

module.exports = {
    async getAll (name) {
        try {
            const notes =  await db.notes.find({
                username: name
            }
            ,{
                projection: {
                    username: 1,
                    content: 1,
                }
            }).sort({note_id: 1}).toArray();
            return notes;
        } catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    },
    async createNew (name) {
        try {
            const result = await db.notes.insertOne({
                username: name,
                content: "New Note"
            });
            // if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    async updateById (id, item) {
        try {
            let o_id = new ObjectId(id);
            const { matchedCount } = await db.notes.updateOne({
                "_id": o_id
            }, {
                $set: item
            });
            if (!matchedCount) throw new Error(`${username} doesn't exist`);
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, I cannot update it with ${JSON.stringify(item)}`);
        }
    },
    async deleteOne (id) {
        try {
            let o_id = new ObjectId(id);
            const { deletedCount } = await db.notes.deleteOne({
                "_id": o_id
            });
            if (!deletedCount) throw new Error(`Note doesn't exist in db`);
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, I cannot remove ${JSON.stringify(item)}`);
        }
    }
};