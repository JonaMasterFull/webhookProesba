
const { Router } = require('express');
const { webhookGet, webhookPost } = require('../controllers/webhook-controller');

const router = Router();

router.get('/',  webhookGet);
  
router.post('/', webhookPost)

module.exports = router;