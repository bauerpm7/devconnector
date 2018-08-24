const express = require('express');
const router = express.Router();

// @ route Get api/posts/test
// test profile route
//@access Public
router.get('/test', (req, res) => res.json({ msg: 'Posts works' }));

module.exports = router;
