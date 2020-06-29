const { expect } = require('chai');
const userRepository = require('../usersRepository');
const db = require('../../db');

describe('usersRepository.create', ()=>{
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should return insertedCount when I insert a new object into db collection', async () => {
        const result = await userRepository.create({
            'username': 'Dexter',
            'password': '123',
            'createdAt': new Date(),
            'updatedAt': new Date()
        });
        expect(result).to.be.true;
    });

    it('should throw an error when I do not input a username', async () => {
        try {
            await userRepository.create({
                'password': '123',
                'createdAt': new Date(),
                'updatedAt': new Date()
            });
        } catch (err) {
            throw new Error(`Due to ${err.message}, insertion failed for ${JSON.stringify(user)}`);
        }
    });
});