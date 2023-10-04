const express = require('express');
const {faker} = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state({abbreviated: true}),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    };
    return newCompany;
};

const app = express();
const port = 3000;

app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({user: newUser, company: newCompany});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





        
