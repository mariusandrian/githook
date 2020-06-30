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
};