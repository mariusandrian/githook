const db = require('../db');
const bcrypt = require('bcrypt');
const SALT_ROUND = process.env.SALT_ROUND || 10;

module.exports = {
    async create (user) {
        try {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(SALT_ROUND));
            const { insertedCount } = await db.users.insertOne(user);
            if (!insertedCount) throw new Error('insert failed');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, insertion failed for ${JSON.stringify(user)}`);
        }
    },
    async find (username) {
        const userReq = await db.users.findOne({username: username});
        // If user is undefined or null, throw errer
        if (!userReq) throw new Error (`The user ${username} is not registered`);
        return userReq;
    }
}