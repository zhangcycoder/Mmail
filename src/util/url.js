function data(params) {//循环拼接参数
    var a = '?';
    for (let i in params) {
        a += `${i}=${params[i]}&`
    }
    a = a.substring(0, a.length - 1)
    return a
}

const GlobalUrl = {
    //登录
    userLogin: function (params) {
        return '/api/' + "user/login.do" + data(params)//调用方法，传入参数，自动拼接到路径后
    },

    //统计接口
    statistic() {
        return /api/ + 'statistic/base_count.do'
    },

    //用户列表
    userList: function (params) {
        return '/api/' + 'user/list.do' + data(params)
    },

    // 订单列表
    orderList: function (params) {
        return '/api/' + 'order/list.do' + data(params)
    },

    // 搜索订单
    orderSearch: function (params) {
        return '/api/' + 'order/search.do?orderNo=' + params
    },

    //订单详情
    orderDetail: function (params) {
        return '/api/' + 'order/detail.do?orderNo=' + params
    },

    //订单发货
    orderSend: function (params) {
        return '/api/' + 'order/send_goods.do?orderNo=' + params
    },

    // 品类列表
    categoryList: function () {
        return '/api/' + 'category/get_category.do?categoryId=0'
    },

    //获取品类子节点
    categoryChildrenList: function (params) {
        return '/api/' + 'category/get_category.do?categoryId=' + params
    },

    //增加节点
    addCategory: function (params) {
        return '/api/' + 'category/add_category.do' + data(params)
    },

    //修改品类名字
    updateSetCategory: function (params) {
        return '/api/' + 'category/set_category_name.do' + data(params)
    },

    //获取当前分类id及递归子节点categoryId
    getCategoryID: function (params) {
        return '/api/' + 'category/get_deep_category.do?categoryId=' + params
    },

    // 产品列表
    productList: function (params) {
        return '/api/' + 'product/list.do' + data(params)
    },

    // 产品搜索
    productSearch: function (params) {
        return '/api/' + 'product/search.do' + data(params)
    },

    //产品详情
    productDetail: function (params) {
        return '/api/' + 'product/detail.do' + params
    },

    //产品上下架
    productSet: function (params) {
        return '/api/' + 'product/set_sale_status.do' + data(params)
    },

    //新增产品
    addProduct: function (params) {
        return '/api/' + 'product/save.do' + data(params)
    },

    //富文本上传图片
    richtextUpLoad: function () {
        return '/api/' + 'product/richtext_img_upload.do'
    }
}

export { GlobalUrl } 
