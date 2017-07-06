import Mock from 'mockjs';

export default {
  mockData () {
    Mock.mock('/api/user', {
      "code": "000",
      "datas": {
        "name": "@cname", 
        "area": "@province(true)",
        "identity": "超级管理员"
      }
    });
    Mock.mock('/api/getUsers', {
      "code": "000",
      "datas|5-20": [
        {
          "img": '@image',
          "name": "@cname",
          "phone": '@email',
          "address": "@county(true)"
        }
      ]
    });
     Mock.mock('/api/getGoods', {
      "code": "000",
      "datas|5-20": [
        {
          "img": '@image',
          "gname": "@cname",
          "price|1-100": 100,
          "stock|1-1000": 100
        }
      ]
    });
    Mock.mock('/api/getOrders', {
      "code": "000",
      "datas|5-20": [
        {
          "orderId": '@date',
          "gname": "@cname",
          "name": "@cname",
          "money|1-100": 100,
          "number|1-100": 100,
          "phone|1-100000000":100,
          "state":'待支付',
        }
      ]
    });
     Mock.mock('/api/getActivity', {
      "code": "000",
      "datas|5-20": [
        {
          "img": '@image',
          "tname": "@title",
          "ttime": '@datetime',
          "stock|1-1000": 100
        }
      ]
    });
  }
};
