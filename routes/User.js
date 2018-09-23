const express = require('express');
const router = express.Router();

router.put('/login', () => {});

router.post('/register', () => {});

router.get('/logout', () => {});

router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;