const express = require('express');
const CommodityController = require('./../controller/Commodity');

const router = express.Router();

router.get('/list', CommodityController.getCommodityList);

module.exports = router;
