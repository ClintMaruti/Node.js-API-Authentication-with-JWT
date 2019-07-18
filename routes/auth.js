const router = require('express').Router();

// Endpoints
router.post('/register', (req, res) => {
    res.send('Registered!');
});

module.exports = router;