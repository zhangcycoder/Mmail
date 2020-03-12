let url = 'http://admintest.happymmall.com/manage/';
const GlobalUrl = {
    userLogin: function (params) {
        return '/api/'+ "user/login.do?username=" + params.username + "&password=" + params.password;
    },

    statistic: url + 'statistic/base_count.do',


    userList: function (params) {
        return '/api/' + 'user/list.do?username=' + params.username + '&password=' + params.password + '&pageSize=' + params.pageSize + '&pageNum=' + params.pageNum
    }
}

export { GlobalUrl } 
