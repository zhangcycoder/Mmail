import {GlobalUrl} from './url.js'
import axios from 'axios'
const network = {
    //登录接口
    getLogin(params,callback){
        let url = GlobalUrl.userLogin(params)
        axios.post(url).then(res=>{callback(res)})
    },
    //首页数据接口
    statistic(callback){
        let url = GlobalUrl.statistic
        axios.get(url).then(res=>callback(res))
    },
    //用户列表接口
    getUserList(params,callback){
        let url = GlobalUrl.userList(params)
        axios.post(url).then(res=>callback(res))
    }
}
export {network}