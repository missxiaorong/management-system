import Mock from 'mockjs';

export default {
  mockData() {
    Mock.mock('/api/getUser', {
      "state": "1",
      "message": "欢迎成功登录奇思广议后台管理系统",
      "session_id": "dwd213790jeidwjeio"
    });
    Mock.mock('/api/logout', {
      "state": "0",
    });
    Mock.mock('/api/getList', {
      "code": "000",
      "datas": {
        "title": "主页",
        "path": "/",
        "icon": "icon-home"
      }
    });
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
        //  {
        //   name: "img",
        //   label: "头像",
        //   width: '',
        //   type: "img",
        // },
        {
           "img": '@image',
          "name": "@cname",
          "phone": '@email',
          "address": "@county(true)",
        }
       
      ]
    });
    Mock.mock('/api/getSearchList', {
      "code": "000",
      "datas": [
        {
          "label": "姓名",
          "name": '',
          "type": "input"
        },
        {
          "label": "订单号",
          "name": '',
          "type": "input"
        },
        {
          "label": "订单状态",
          "name": '',
          'type': 'select',
          options: [
            { label: 'One', value: 'A' },
            { label: 'Two', value: 'B' },
            { label: 'Three', value: 'C' }
          ]

        },
        {
          "label": "地址",
          "name": '',
          "type": "input"
        },
        {
          "label": "时间",
          "name": '',
          'type': 'time',
          'val': [new Date(2016, 1, 10, 10, 10), new Date(2016, 5, 11, 10, 10)],
        },

      ]
    });
    Mock.mock('/api/getTableHead', {
      "code": "000",
      "datas": [

        // {
        //   name: "img",
        //   label: "头像",
        //   width: '',
        //   type: "img",
        // },
       {
          name: "img",
          label: "头像",
          width: '100',
          type: "img",
        },
        {
          name: "name",
          label: "姓名",
          width: '100',
          type: "",
        },
        {
          name: "phone",
          label: "手机号",
          width: '100',
          type: "",
        },
        {
          name: "address",
          label: "地址",
          width: '250',
          type: '',
        },
         {
          name: "state",
          label: "状态",
          width: '100',
          type: '',
        },
      
        
      
      ]
    });
    Mock.mock('/api/getDeatailId', {
      "code": "000",
      "datas": [
        {
          label: '商品图片',
          val: '1',
          type: 'img',
          url: 'http://p4.so.qhimgs1.com/bdr/_240_/t01330198da525d03ea.jpg'
        },
        {
          label: '商品名称',
          val: '2',
          type: 'input',
          title: '请输入角色名称',
        },
         {
          label: '图标',
          val: '3',
          type: 'input',
          title: '请选择图标',
        },
         {
          label: '商品状态',
          val: 'true',
          type: 'switch',
          title: '请选择状态',
        },
        {
          label: '商品站点',
          val: '4',
          type: 'radio',
          radioGroup: [
            {
              label: "1",
              val: '',
              type: ''
            },
            
            {
              label: "2",
              val: '',
              type: ''
            },
              {
              label: ",3",
              val: '',
              type: ''
            }
          ]
        },
        {
          "label": "订单状态",
          "name": '',
          'type': 'select',
          title: '请选择状态',
          options: [
            { label: 'One', value: 'A' },
            { label: 'Two', value: 'B' },
            { label: 'Three', value: 'C' }
          ]

        },
        {
          label: '权限选择',
          val: '',
          type: 'tree',
          title: '请选择权限'
        },
        {
          label: '商品详情',
          val: '',
          type: 'ueditor'
        },
      ]
    });
      Mock.mock('/api/addList', {
      "code": "000",
      "datas": [
        {
          label: '商品图片',
          val: '1',
          type: 'img',
          url: 'http://p4.so.qhimgs1.com/bdr/_240_/t01330198da525d03ea.jpg'
        },
        {
          label: '商品名称',
          val: '2',
          type: 'input',
          title: '请输入角色名称',
        },
         {
          label: '图标',
          val: '3',
          type: 'input',
          title: '请选择图标',
        },
       {
          label: '商品状态',
          val: 'true',
          type: 'switch',
          title: '请选择状态',
        },
        {
          label: '商品站点',
          val: '4',
          type: 'radio',
          radioGroup: [
            {
              label: "1",
              val: '',
              type: ''
            },
            
            {
              label: "2",
              val: '',
              type: ''
            },
              {
              label: "3",
              val: '',
              type: ''
            }
          ]
        },
        {
          "label": "订单状态",
          "name": '',
          'type': 'select',
          title: '请选择状态',
          options: [
            { label: 'One', value: 'A' },
            { label: 'Two', value: 'B' },
            { label: 'Three', value: 'C' }
          ]

        },
        {
          label: '权限选择',
          val: '',
          type: 'tree',
          title: '请选择权限'
        },
        {
          label: '商品详情',
          val: '',
          type: 'ueditor'
        },
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
          "phone|1-100000000": 100,
          "state": '待支付',
        }
      ]
    });
    Mock.mock('/api/getDelivery', {
      "code": "000",
      "datas|5-20": [
        {
          "orderId": '@date',
          "gname": "@cname",
          "name": "@cname",
          "money|1-100": 100,
          "number|1-100": 100,
          "phone|1-100000000": 100,
          "state": '待支付',
          
        }
      ]
    });
    Mock.mock('/api/getReturn', {
      "code": "000",
      "datas|5-20": [
        {
          "orderId": '@date',
          "gname": "@cname",
          "name": "@cname",
          "money|1-100": 100,
          "number|1-100": 100,
          "phone|1-100000000": 100,
          "state": '待支付',
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

    Mock.mock('/api/getRoles', {
      "code": "000",
      "datas|5-20": [
        {
          "rname": '@name',
          "rdescribe": "@title",
          "rstate": '启用',
          "rnum|1-10": 10
        }
      ]
    });
    Mock.mock('/api/getAdmin', {
      "code": "000",
      "datas|5-20": [
        {
          "aname": '@name',
          "nickname": '超级管理员',
          "aphone|1-100000000": 100,
          "aemail": '@email',
          "arole": '管理员',
          "astate": '启用',
          'lasttime': '@datetime',
          'thistime': '@datetime',
        }
      ]
    });
    Mock.mock('/api/getLog', {
      "code": "000",
      "datas|5-20": [
        {
          "lname": '超级管理员',
          "ldescribe": "@sentence",
          "ltime": '@datetime',
          "ip": '@ip',

        }
      ]
    });
     Mock.mock('/api/getOrderNav', {
      "code": "000",
      "datas":[
        {
          title: "全部",
          path: "/",
        },
        {
          title: "待支付",
          path: "/userManagement",
        },
        {
          title: "待发货",
          path: "/userManagement",
        },
        {
          title: "已发货",
          path: "/userManagement",
        },
      ]
    });
  }
};
