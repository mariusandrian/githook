const db = require('../db');
const { assert } = require('chai');

module.exports = {
    async getAll () {
        try {
            const starred =  await db.starred.find({},{
                projection: {
                    name: 1,
                    stargazers_count: 1,
                    forks: 1,
                    description: 1,
                    html_url: 1,
                    owner: 1,
                    _id: 0
                }
            }).sort({stargazers_count: -1}).toArray();
            return starred;
        } catch (err) {
            throw new Error(`Database Error - ${err.message}`);
        }
    },
    // async show (name) {
    //     const item = await db.shop.findOne({ name: { '$regex': `^${name}$`, '$options': 'i' } });
    //     if (!item) throw new Error('Non-existance');
    //     return item;
    // },
    // async create (item) {
    //     try {
    //         const { insertedCount } = await db.shop.insertOne(item);
    //         if (!insertedCount) throw new Error('insertion failure');
    //         return true;
    //     } catch (err) {
    //         throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
    //     }
    // },
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
    // async updateByName (name, item) {
    //     try {
    //         const { matchedCount } = await db.shop.updateOne({
    //             name: {
    //                 '$regex': `^${name}$`,
    //                 '$options': 'i'
    //             }
    //         }, {
    //             $set: item
    //         });
    //         if (!matchedCount) throw new Error(`${name} doesn't exist`);
    //         return true;
    //     } catch (err) {
    //         throw new Error(`Due to ${err.message}, I cannot update it with ${JSON.stringify(item)}`);
    //     }
    // }
};