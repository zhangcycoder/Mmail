
function Time(past){
    var start = new Date(past);//初始化输入时间
	var startYear = start.getFullYear();//获取输入年份
	var startMonth = start.getMonth() + 1;//获取输入月份
	var startDay = start.getDate();//获取输入日期
 
	var current = new Date();//当前时间
	var currentYear = current.getFullYear();//获取当前年份
	var currentMonth = current.getMonth() + 1;//获取当前月份
	var currentDay = current.getDate();//获取当前日期
	var years = 0;//声明一个年数变量
	var months = currentMonth - startMonth + (currentYear - startYear) * 12;//总月
	if (currentMonth * 100 + currentDay < startMonth * 100 + startDay) {
		months--;//如果结束日期小月输入日期，月数要-1
	}
	years = Math.floor(months / 12);//取整计算年数
    months = months % 12;//取余计算月数
	var middleDate = new Date(start);//中间时间
	middleDate.setFullYear(startYear + years);//设置中间时间年份
	middleDate.setMonth(start.getMonth() + months);//设置中间时间月份
    var days =  Math.floor( ( current.getTime()- middleDate.getTime()) / 24 / 60/ 60 / 1000);//计算天数
    if(years==0){
        return(years+'年'+months+'月'+days+'天前');
    }else if(months==0){
        return(months+'月'+days+'天前');
    }else if(days==0){
        return(days+'天前');
    }else{
        return '一天内'
    }
}
export default Time