const Commodity = require('./../model/commodity/Commodity');
const CommodityItem = require('./../model/commodity/CommodityItem');
const CommodityItemFormatOption = require('./../model/commodity/with_option/CommodityItemFormatOption');
const OrderItem = require('./../model/order/OrderItem');
const Brand = require('./../model/option/Brand');
const Business = require('./../model/business/Business');
const Coupon = require('./../model/shopping_activity/Coupon');
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
    Commodity.find().select('name price photo').then(list => {
      result = list;
      const promises = list.map(item => {
        return new Promise((resolve, reject) => {
          OrderItem.count({commodityId: item._id}).then(count => {
            resolve(count);
          }).catch(err => {
            resolve(0);
          })
        });
      });
      return Promise.all(promises);
    }).then(data => {
      const list = result.map((item, index) => {
        return {
          _id: item._id,
          name: item.name,
          price: item.price,
          photo: item.photo,
          shoppingCount: data[index]
        };
      });
      resSuccess(res, list);
    });
  }

  // 获取货品详情
  async getCommodityDetail(req, res) {
    const _id = req.query.id;
    const commodity = await Commodity.findOne({_id: _id});
    if (commodity) {
      const business = await Business.findOne({_id: commodity.businessId}); // 获取货品所属商家
      const brand = await Brand.findOne({_id: commodity.brandId}); // 获取货品所属品牌
      const promises = [];
      promises.push(new Promise((resolve, reject) => {  // 获取货品所有商品
        CommodityItem.find({parentId: _id}).then(list => {
          resolve(list);
        }).catch(err => {
          resolve([]);
        })
      }));
      promises.push(new Promise((resolve, reject) => { // 获取货品所在商家的券
        Coupon.find()
          .or([{connectId: commodity.businessId, connectType: 1, status: 1}, {connectId: commodity._id, connectType: 0, status: 1}])
          .then(list => {
            resolve(list);
          }).catch(err => {
            resolve([]);
          })
      }));
      const result = {
        _id: commodity._id,
        name: commodity.name,
        description: commodity.description,
        photo: commodity.photo,
        price: commodity.price,
        activityPrice: commodity.activityPrice,
        freight: commodity.freight,
        business: business,
        brand: brand,
      };
      Promise.all(promises).then(data => {
        result.commodityItems = data[0];
        result.coupons = data[1];
        const formatPromises = [];
        result.commodityItems.forEach(item => {
          formatPromises.push(new Promise((resolve, reject) => {
            CommodityItemFormatOption.find({commodityItemId: item._id}).then(list => {
              resolve(list);
            }).catch(err => {
              resolve([]);
            })
          }))
        })
        return Promise.all(formatPromises)
      }).then(data => {
        result.commodityItems = result.commodityItems.map((commodityItem, index) => {
          const {_id, originalPrice, count, photo} = commodityItem;
          return {
            _id,
            originalPrice,
            count,
            photo,
            formats: data[index].map(format => format.commodityFormatOptionId)
          }
        })
        resSuccess(res, result);
      }).catch(err => {
        resSuccess(res, result);
      })
    } else {
      resError(res, '货品详情获取失败');
    }
  }

  test(req, res) {

  }

}

module.exports = new CommodityController();
