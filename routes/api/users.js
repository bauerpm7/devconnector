const express = require('express');
const router = express.Router();

// @ route Get api/users/test
// test post route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

module.exports = router;
