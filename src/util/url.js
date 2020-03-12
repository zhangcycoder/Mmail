function data(params) {
    if (params.pageSize) {
        return '?pageSize=' + params.pageSize + '&pageNum=' + params.pageNum;
    } else {
        return '?username=' + params.username + "&password=" + params.password
    }
}

const GlobalUrl = {
    userLogin: function (params) {
        return '/api/' + "user/login.do"+data(params)
    },

    statistic: /api/ + 'statistic/base_count.do',


    userList: function (params) {
        return '/api/' + 'user/list.do'+ data(params)
    },

    orderList: function (params) {
        return '/api/' + 'order/list.do'+ data(params)
    },
    orderSearch:function(params){
        return '/api/'+'order/search.do?orderNo='+params
        // return '/api/'+'order/search.do'
    }
}

export { GlobalUrl } 
