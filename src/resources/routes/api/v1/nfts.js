const express = require('express');
const router = express.Router();
const NFTController = require('../../../app/controllers/api/v1/NFTController');

router.get('/', NFTController.index);
router.get('/:slug', NFTController.takedata);
router.get('/myorder/:acc', NFTController.take_data_myorder);
router.post('/register/order',NFTController.register_order)
module.exports = router;