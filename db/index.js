const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'githook';
const COLLECTIONS = {
    USERS: 'users',
    STARRED: 'starred',
    NOTES: 'notes'
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.users = db.collection(COLLECTIONS.USERS);
        this.starred = db.collection(COLLECTIONS.STARRED);
        this.notes = db.collection(COLLECTIONS.NOTES);
    },
    disconnect () {
        return client.close();
    },
};
