const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Student = require('../models/Student');

router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;
      
        let user = await Student.findOne({ email });
        if (user) return res.json({ msg: 'User already exists' });
 
        await Students.create({ email, password: await bcrypt.hash(password, 5)}); 
        return res.json({ msg: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });  
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Student.findOne({ email });

        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1d' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;


