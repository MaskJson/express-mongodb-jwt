const Commodity = require('./../model/commodity/Commodity');
const OrderItem = require('./../model/order/OrderItem');
const util = require('./../util/utils');
const AbstractController = require('./AbstractController');
const resSuccess = util.resSuccess;
const resError = util.resError;

class CommodityController extends AbstractController {
  constructor() {
    super();
  }

  // 获取货品列表
  async getCommodityList(req, res) {
    let result;
    Commodity.find({
      // select:'name price sales'
    }).select('name price').then(list => {
      result = list;
      const promises = list.map(item => {
        return new Promise((resolve, reject) => {
          OrderItem.count({commodityId: item._id}).then(count => {
            resolve(count);
          }).catch(err => {
            reject(err);
          })
        });
        // return OrderItem.count({commodityId: item._id});
      })
      return Promise.all(promises);
    }).then(data => {
      const list = result.map((item, index) => {
        return {
          _id: item._id,
          name: item.name,
          price: item.price,
          shoppingCount: data[index]
        };
      });
      resSuccess(res, list);
    });
  }
}

module.exports = new CommodityController();
