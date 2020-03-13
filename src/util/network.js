import { GlobalUrl } from './url.js'
import axios from 'axios'
function request(connector, method, callback) {
    switch (method) {
        case 'post':
            axios.post(connector).then(res => { callback(res) })
            break;
        case 'get':
            axios.get(connector).then(res => { callback(res) })

            break;
        case 'NO':
            axios.post(connector).then(res => callback(res))
            break;
        default:
            break;
    }
}
//引入GlobalUrl里的方法对象，调用方法会返回一个接口路径，拿到接口之口开始写请求，并让客户端调用
const network = {

    //统计接口
    statistic(callback) {
        request(GlobalUrl.statistic(), 'NO', callback)//调用request方法，参数1是路径，参数二是请求方式，参数三是回调函数
    },

    //登录接口
    getLogin(params, callback) {
        request(GlobalUrl.userLogin(params), 'post', callback)
    },

    //用户列表接口
    getUserList(params, callback) {
        request(GlobalUrl.userList(params), 'post', callback)
    },

    //添加商品
    getAddProduct(params, callback) {
        request(GlobalUrl.addProduct(params), 'get', callback)
    },

    //订单列表接口
    getOrderList(params, callback) {
        request(GlobalUrl.orderList(params), 'post', callback)
    },

    //订单查询接口
    getSearch(params, callback) {
        request(GlobalUrl.orderSearch(params), 'post', callback)
    },

    //品类接口1
    getCategory(callback) {
        request(GlobalUrl.categoryList(), 'get', callback)
    },

    //产品接口
    getProduct(params, callback) {
        request(GlobalUrl.productList(params), 'post', callback)
    },

    //产品查询
    getProductSearch(params, callback) {
        request(GlobalUrl.productSearch(params), 'get', callback)
    },


    //品类子列表11
    getCategoryChildrenList(params, callback) {
        request(GlobalUrl.categoryChildrenList(params), 'get', callback)
    },


    //产品上下架
    setProduct(params, callback) {
        request(GlobalUrl.productSet(params), 'get', callback)
    },


    //修改品类名称
    setCategoryName(params, callback) {
        request(GlobalUrl.updateSetCategory(params), 'get', callback)
    },


    //增加子节点
    setAddCategory(params, callback) {
        request(GlobalUrl.addCategory(params), 'get', callback)
    },

    //增加子节点
    getOrderDetail(params, callback) {
        request(GlobalUrl.orderDetail(params), 'get', callback)
    },

}
export { network }








// getCategoryList(callback) { request(GlobalUrl.categoryList(), 'get',callback ) },//品类列表1
// getCategoryChildren(params, callback) { request(GlobalUrl.categoryChildrenList(params), 'get',callback ) },//获取商品子类11


