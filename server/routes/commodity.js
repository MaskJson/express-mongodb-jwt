const express = require('express');
const CommodityController = require('./../controller/Commodity');

const router = express.Router();

router.get('/list', CommodityController.getCommodityList);
router.get('/detail', CommodityController.getCommodityDetail);
router.get('/test', CommodityController.test);

module.exports = router;
