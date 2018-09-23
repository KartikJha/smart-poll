const express = require('express');
const router = express.Router();

router.put('/login', () => {});

router.post('/register', (req, res) => {
    
});

router.get('/logout', () => {});

router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;