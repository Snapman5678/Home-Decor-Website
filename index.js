const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const ContactModel = require('./models/Contact');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post('/login', async (request, response) => {
    const { email, password } = request.body;
    const user = await UserModel.findOne({ email: email });
    if(user) {
        if(password === user.password) {
            response.json({ message: "Login Successful", status: "success" });
        } else {
            response.json({ message: "Invalid password", status: "error" });
        }
    } else {
        response.json({ message: "User not found", status: "error" });
    }
});

app.post('/register', async (request, response) => {
    const { name, email, password } = request.body;
    const userExists = await UserModel.findOne({ email: email });
    if(userExists) {
        response.json({ message: "User already exists", status: "error" });
    } else {
        const user = new UserModel({ name, email, password });
        user.save()
        .then(user => response.json({ message: "Account created successfully", status: "success" }))
        .catch(err => response.json({ message: err.message, status: "error" }));
    }
});

app.post('/contact', async (request, response) => {
    const { name, email, message } = request.body;
  
    try {
      const contact = new ContactModel({ name, email, message });
      await contact.save();
  
      response.json({ message: 'Message stored successfully', status: 'success' });
    } catch (error) {
      response.json({ message: error.message, status: 'error' });
    }
  });

app.listen(3001, () => {
    console.log("Server is running");
});