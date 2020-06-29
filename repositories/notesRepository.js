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
    // async show (name) {
    //     const item = await db.shop.findOne({ name: { '$regex': `^${name}$`, '$options': 'i' } });
    //     if (!item) throw new Error('Non-existance');
    //     return item;
    // },
    async create (item) {
        try {
            const { insertedCount } = await db.notes.insertOne(item);
            if (!insertedCount) throw new Error('insertion failure');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    // async getOneByName (name) {
    //     const foundItem = await db.shop.findOne(
    //         {
    //             name: {
    //                 '$regex': `^${name}$`,
    //                 '$options': 'i'
    //             }
    //         }
    //     );
    //     if (!foundItem) throw new Error(`Item with name '${name}' does not exist`);
    //     return foundItem;
    // },
    async updateById (id, item) {
        try {
            console.log(id);
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
    }
};