const express = require('express');
const app = express();
const adminRoute = express.Router();
const bcrypt = require('bcryptjs');
let Admin = require('../Admin');
const jwt = require('jsonwebtoken');
const config = require('../../config');

// Register admin
adminRoute.route('/register-admin').post((request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 8);
    Admin.create({
        name: request.name,
        email: request.body.email,
        password: hashedPassword
    }, (error, data) => {
        if (error) return res.status(500).send("There was a problem registering the user.");

        response.json(data)
        var token = jwt.sign({ id: data._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
    });
})

// Sign in
adminRoute.route('/login-admin').post((request, response) => {
    Admin.findOne({ email: request.body.email }, (err, data) => {
        if (err) return res.status(500).send('Error on the server.');
        const passwordIsValid = bcrypt.compareSync(request.body.password, data.password);
        if (!passwordIsValid) return response.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: data._id }, config.secret, {
            expiresIn: 86400
        });
        return response.status(200).send({ auth: true, token: token });
    });
})





// Get all admins
adminRoute.route('/get-admins').get((request, response, next) => {
    Admin.find((error, data) => {
        if (error) return next(error);
        else response.json(data);
    });
});

// Get admins by id
adminRoute.route('/get-admin/:id').get((request, response, next) => {
    Admin.findById(request.params.id, (error, data) => {
        if (error) return next(error);
        else response.json(data);
    });
});

// Update admins
adminRoute.route('/update-admins/:id').put((request, response, next) => {
    Admin.findByIdAndUpdate(request.params.id, {
        $set: request.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            response.json(data);
            console.log('User successfully updated!');
        }
    });
});

// Delete admin
adminRoute.route('/delete-admins/:id').delete((request, response, next) => {
    Admin.findByIdAndRemove(request.params.id, (error, data) => {
        if (error) return next(error);
        else response.status(200).json({ msg: data });
    });
});

adminRoute.route('/delete-admins').delete((request, response, next) => {
    Admin.remove(request.params.id, (error, data) => {
        if (error) return next(error);
        else response.status(200).json({ msg: data });
    });
});

module.exports = adminRoute;