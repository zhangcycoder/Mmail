import { GlobalUrl } from './url.js'
import axios from 'axios'
function request(connector, method) {
    switch (method) {
        case 'post':
            return axios.post(connector)
        case 'get':
            return axios.get(connector)
        default:
            break;
    }
}
//引入GlobalUrl里的方法对象，调用方法会返回一个接口路径，拿到接口之口开始写请求，并让客户端调用
const network = {

    //统计接口
    statistic() {
        return request(GlobalUrl.statistic(),'post')//调用request方法，参数1是路径，参数二是请求方式
    },

    //登录接口
    getLogin(params) {
        return request(GlobalUrl.userLogin(params), 'post')
    },

    //用户列表接口
    getUserList(params) {
        return request(GlobalUrl.userList(params), 'post')
    },

    //添加商品
    getAddProduct(params) {
        return request(GlobalUrl.addProduct(params), 'get')
    },

    //订单列表接口
    getOrderList(params) {
        return request(GlobalUrl.orderList(params), 'post')
    },

    //订单查询接口
    getSearch(params) {
        return request(GlobalUrl.orderSearch(params), 'post')
    },

    //品类接口1
    getCategory() {
        return request(GlobalUrl.categoryList(), 'get')
    },

    //产品接口
    getProduct(params) {
        return request(GlobalUrl.productList(params), 'post')
    },

    //产品查询
    getProductSearch(params) {
        return request(GlobalUrl.productSearch(params), 'get')
    },


    //品类子列表11
    getCategoryChildrenList(params) {
        return request(GlobalUrl.categoryChildrenList(params), 'get')
    },


    //产品上下架
    setProduct(params) {
        return request(GlobalUrl.productSet(params), 'get')
    },


    //修改品类名称
    setCategoryName(params) {
        return request(GlobalUrl.updateSetCategory(params), 'get')
    },


    //增加子节点
    setAddCategory(params) {
        return request(GlobalUrl.addCategory(params), 'get')
    },

    //增加子节点
    getOrderDetail(params) {
        return request(GlobalUrl.orderDetail(params), 'get')
    },

}
export { network }








// getCategoryList() { request(GlobalUrl.categoryList(), 'get',callback ) },//品类列表1
// getCategoryChildren(params) { request(GlobalUrl.categoryChildrenList(params), 'get',callback ) },//获取商品子类11


