const express = require('express');
const router = express.Router();
const urlcontrollers = require('../controllers/urlControllers.js');

// Url Routes
router.get('/api/user', urlcontrollers.get_url);
router.post('/api/user', urlcontrollers.post_url);
router.post('/api/user/premium', urlcontrollers.post_premium_url);

router.delete('/:shortid', urlcontrollers.delete_url);
router.get('/:shortid', urlcontrollers.get_click_short_url);
router.get('/analytics/:shortid', urlcontrollers.get_clicks_data);

module.exports = router;
