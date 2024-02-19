const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Students', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
})();

app.use('/', router); 

app.use(function (req, res, next) {
    next();
});

const PORT = 5601;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
