const request = require('supertest')
const app = require('../src/app')

test('should signup a new user' , async () =>{
  await request(app).post('/users').send({
    name : "shubhangi",
    emaill : "shubhangi@gmial.com",
    password : "sush@1998!"
  }).expect(201)
})