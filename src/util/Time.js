
// function Time(past){
//     var start = new Date(past);//初始化输入时间
// 	var startYear = start.getFullYear();//获取输入年份
// 	var startMonth = start.getMonth() + 1;//获取输入月份
// 	var startDay = start.getDate();//获取输入日期

// 	var current = new Date();//当前时间
// 	var currentYear = current.getFullYear();//获取当前年份
// 	var currentMonth = current.getMonth() + 1;//获取当前月份
// 	var currentDay = current.getDate();//获取当前日期
// 	var years = 0;//声明一个年数变量
// 	var months = currentMonth - startMonth + (currentYear - startYear) * 12;//总月
// 	if (currentMonth * 100 + currentDay < startMonth * 100 + startDay) {
// 		months--;//如果结束日期小月输入日期，月数要-1
// 	}
// 	years = Math.floor(months / 12);//取整计算年数
//     months = months % 12;//取余计算月数
// 	var middleDate = new Date(start);//中间时间
// 	middleDate.setFullYear(startYear + years);//设置中间时间年份
// 	middleDate.setMonth(start.getMonth() + months);//设置中间时间月份
//     var days =  Math.floor( ( current.getTime()- middleDate.getTime()) / 24 / 60/ 60 / 1000);//计算天数
//     if(years==0){
//         return(years+'年'+months+'月'+days+'天前');
//     }else if(months==0){
//         return(months+'月'+days+'天前');
//     }else if(days==0){
//         return(days+'天前');
//     }else{
//         return '一天内'
//     }
// }
// export default Time


function dispose(dateTimeStamp) {   //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
    var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    // var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();   //获取当前时间毫秒
    // console.log(now)
    var diffValue = now - dateTimeStamp;//时间差

    if (diffValue < 0) {
        return;
    }
    var minC = diffValue / minute;  //计算时间差的分，时，天，周，月
    var hourC = diffValue / hour;
    var dayC = diffValue / day;
    var weekC = diffValue / week;
    var monthC = diffValue / month;
    var result;
    if (monthC >= 1 && monthC <= 11) {
        result = " " + parseInt(monthC) + "个月前"
    } else if (weekC >= 1 && weekC <= 3) {
        result = " " + parseInt(weekC) + "周前"
    } else if (dayC >= 1 && dayC <= 6) {
        result = " " + parseInt(dayC) + "天前"
    } else if (hourC >= 1 && hourC <= 23) {
        result = " " + parseInt(hourC) + "小时前"
    } else if (minC >= 1 && minC <= 59) {
        result = " " + parseInt(minC) + "分钟前"
    } else if (diffValue >= 0 && diffValue <= minute) {
        result = "刚刚"
    } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        // var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        // var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        // var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + "年" + Nmonth + "月" + Ndate + "日"
    }
    return result;
}
module.exports = time => {
    if (time instanceof Date) {
        var dateTimeStamp = time.getTime()
    } else if (typeof time == 'string') {
         dateTimeStamp = (new Date(time)).getTime()
    } else if (typeof time == 'number') {
         dateTimeStamp = time;
    }
    return dispose(dateTimeStamp)
}