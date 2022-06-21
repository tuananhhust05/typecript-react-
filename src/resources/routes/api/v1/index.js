const express = require('express');
const router = express.Router();
const NFTRouter = require('./nfts');

router.use('/nfts', NFTRouter);

module.exports = router;