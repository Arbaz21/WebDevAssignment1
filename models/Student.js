const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String},
    age: { type: Number }
}); 

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
