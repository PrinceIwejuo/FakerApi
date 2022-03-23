const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class Users {
    constructor(){
        this.user_id = faker.datatype.uuid()
        this.name = faker.name.firstName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor(){
        this.company_id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.streetName = faker.address.streetName(),this.city = faker.address.city(), 
        this.state = faker.address.state(), 
        this.zipCode = faker.address.zipCode(), this.country = faker.address.country()
    }
}

app.get("/api/hello", (req, res) => {
    res.json({msg:"hello world wassup slatt"})
})

app.get("/api/users",(req, res ) => {
    const new_user = new Users()
    res.json({ results: new_user})
})

app.get("/api/company", (req, res) => {
    const new_company = new Company()
    res.json({ results: new_company})
})

app.get("/api/users/company", (req, res) => {
    const new_company = new Company()
    const new_user = new Users()
    res.json({ company: new_company, user: new_user })
})



app.listen( port, () => console.log(`Listening on port: ${port}`) );