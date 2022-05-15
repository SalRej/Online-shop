const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
describe("Test routes",()=>{

    test('/getSales to return 200 status and data to be array',async () =>{
        const response = await request(app).get('/getSales').expect(200);
        const { data } = response.body;
        expect(Array.isArray(data)).toBe(true);
    })

    test('/getCategorie to return 200 status and data to be defined', async () =>{
        const response = await request(app).get('/getCategorie?categorie=mens').expect(200);
        const {data} = response.body;
        expect(data).toBeDefined();
    })

    test('/getSubCategorie to return 200 status and data to be defined', async () =>{
        const response = await request(app).get('/getSubCategorie?subCategorie=mens-clothing').expect(200);
        const {data} = response.body;
        expect(data).toBeDefined();
    })

    afterAll(()=>{ mongoose.connection.close();});
})