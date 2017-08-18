import userData from '../../../static/json/user'
import goodsData from '../../../static/json/goods'
import actData from '../../../static/json/act'
import orderData from '../../../static/json/order'
import authData from '../../../static/json/auth'
import logData from '../../../static/json/log'
import sideData from '../../../static/json/side'
export default {
  getUrl:function(sign){
    var arr=[]
    console.log(sign)
    if (sign == "user") {
        var head_url = userData.userTableHead
        var searchList_url = userData.userSearchList
        var search_url = userData.userSearch
        var table_url = userData.userTableList
        var add_url = userData.goodsAddList
          arr={head_url,table_url,searchList_url,search_url}
        return arr
    }
    if (sign == "goods") {
        var head_url = goodsData.goodsTableHead
        var searchList_url = goodsData.goodsSearchList
        var searchList_url = goodsData.goodsSearchList
        var table_url = goodsData.goodsTableList
        var addList_url = goodsData.goodsAddList
        var add_url = goodsData.goodsAdd
          arr={head_url,table_url,searchList_url,search_url,addList_url,add_url}
        return arr
    }
    if (sign == "act") {
       var head_url = actData.actTableHead
        var table_url = actData.actTableList
        var addList_url = actData.actAddList
        var add_url = actData.actAdd
       arr={head_url,table_url,addList_url,add_url}
        return arr
    }
    if (sign == "order") {
        var searchList_url = orderData.orderSearchList
        var searchList_url = orderData.orderSearchList
        var nav_url =orderData.navList
        var head_url = orderData.orderTableHead
        var table_url = orderData.orderTableListd
        arr={head_url,table_url,searchList_url,search_url,nav_url}
        return arr
    }
     if (sign == "delivery") {
        var head_url = orderData.orderTableHead
        var table_url = orderData.deliveryTableList
        arr={head_url,table_url}
        return arr
    }
     if (sign == "return") {
        var searchList_url = orderData.orderSearchList
        var searchList_url = orderData.orderSearchList
        var nav_url =orderData.navReturnList
        var head_url = orderData.orderTableHead
        var table_url = orderData.orderTableListd
        arr={head_url,table_url,searchList_url,search_url,nav_url}
        return arr
    }
    if (sign == "admin") {
         var head_url = authData.adminTableHead
        var table_url = authData.adminTableList
        var addList_url = authData.adminAddList
        var add_url = authData.adminAdd
       arr={head_url,table_url,addList_url,add_url}
        return arr
    }
    if (sign == "role") {
         var head_url = authData.roleTableHead
        var table_url = authData.roleTableList
        var addList_url = authData.roleAddList
        var add_url = authData.roleAdd
       arr={head_url,table_url,addList_url,add_url}
        return arr
    }
    if (sign == "priv") {
        var url = authData.addpriv;
    }
    if(sign== 'log'){
        var head_url = logData.logTableHead
        var table_url = logData.logTableList
        arr = {head_url,table_url}
        return arr
    }

    //  arr={head_url,table_url,searchList_url,search_url}
    //     return arr
  },
  getSideList(){
      console.log(11)
      var  url =sideData.sideList
      return url
  },
  getNav:function(nav){
      if(nav=="nav_all"){
        var nav_url =orderData.navList
      }
      return nav_url
  }
}