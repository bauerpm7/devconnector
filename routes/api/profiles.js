const express = require('express');
const router = express.Router();

// @ route Get api/profiles/test
// test profiles route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Profiles works' }));

module.exports = router;