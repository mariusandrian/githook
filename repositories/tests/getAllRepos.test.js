const { expect } = require('chai');

const shopRepository = require('../starredRepository');
const db = require('../../db');
const StarredRepository = require('../starredRepository');

describe('starredRepository.getAll', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });
    
    it('should return an array', async () => {
        const starredRepos = await StarredRepository.getAll();
        expect(starredRepos).to.be.an('array');
    });

    // it('should return an array of shop items, and one of the items should be "Beans"', async () => {
    //     const shopItems = await shopRepository.getAll();
    //     const beans = shopItems.find(item => item.name === 'Beans');
    //     expect(beans.name).to.equal('Beans');
    // });

    // it('should return all multiple items',  async () => {
    //     const shopItems = await shopRepository.getAll();
    //     expect(shopItems.length).to.be.greaterThan(0);
    // });
});