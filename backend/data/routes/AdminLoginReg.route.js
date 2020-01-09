const express = require('express');
const app = express();
const adminRoute = express.Router();
const bcrypt = require('bcryptjs');
let Admin = require('../Admin');
const jwt = require('jsonwebtoken');
const config = require('../../config');

// Register admin
adminRoute.post('/register-admin', (request, response) => {

    const hashedPassword = bcrypt.hashSync(request.body.password, 10);
    Admin.create({
        name: request.body.name,
        email: request.body.email,
        password: hashedPassword
    }, (error, data) => {
        if (error) res.status(500).json("There was a problem registering the user.");

        let token = jwt.sign({ id: data._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        response.json(token)
    });
})

// Sign in
adminRoute.route('/login-admin').post((request, response) => {
    console.log(request.body)
    Admin.findOne({ email: request.body.email }, (err, data) => {
        if (err) res.status(500).json('Error on the server.');
        const passwordIsValid = bcrypt.compareSync(request.body.password, data.password);
        if (!passwordIsValid) return response.status(401).json("Password is not valid");
        let token = jwt.sign({ id: data._id }, config.secret, {
            expiresIn: 86400
        });
        response.json(token);
    });
})

module.exports = adminRoute;