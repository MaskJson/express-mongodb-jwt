const util = require('./../util/utils');
const AbstractController = require('./AbstractController');

const CommodityItemFormatOption = require('./../model/commodity/with_option/CommodityItemFormatOption');

const resSuccess = util.resSuccess;
const resError = util.resError;

class TestController extends AbstractController {
  constructor() {
    super();
  }
  async test(req, res) {
    // const entity = new Commodity({
    //   name: '2018科比第八代战靴，退役纪念款',
    //   description: '2019科比最新款战靴，高帮透气，弹力十足',
    //   coverUrl: 'cover.jpg',
    //   price: 688,
    //   businessId: '5c3f01fda329121c84001b5f',
    //   brandId: '5c3f300eb52b2d1ec4dece1f'
    // })
    // const entity = new CommodityFormatOption({
    //   name: '44',
    //   commodityFormatId: '5c3f3a4ba568271e9084deac'
    // })
    const entity = new CommodityItemFormatOption({
      commodityFormatOptionId: '5c3f3bff9c2a391f34d249c3',
      commodityItemId: '5c3f3cd6729af819b0913154'
    })
    try {
      entity.save((err, entity) => {
        if (err) {
          resError(res, err);
        } else {
          resSuccess(res, entity);
        }
      })
    } catch (e) {
      resError(res);
    }
  }
}

module.exports = new TestController();
