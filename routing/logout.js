const express = require('express');
const router = express.Router();
const { getLogoutView, logoutUser } = require('../controllers/logoutController');

router.get('/logout', getLogoutView);
router.post('/logout', logoutUser);

module.exports = router;
