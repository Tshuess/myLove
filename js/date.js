function dates(){
 var today = new Date(); //新建一个Date对象
  var date = today.getDate();//查询当月日期
  var day = today.getDay();//查询当前星期几  c int a=
  var month = today.getMonth()+1;//查询月份
  var year = today.getFullYear();//查询年份  
  var hour=today.getHours();
  var hi="";
  if (hour>=8 & hour<=12) hi="上午好朋友,欢迎来到我的主页";
  if (hour>12 & hour<=18) hi="下午好朋友,欢迎来到我的主页";
  if (hour>18 & hour<=24) hi="晚上好朋友,欢迎来到我的主页";
  if (hour>=0 & hour<8) hi="凌晨好朋友,欢迎来到我的主页";
  var week="";                               
  if (day==0) week='星期日';
  if (day==1) week='星期一';
  if (day==2) week='星期二';
  if (day==3) week='星期三';
  if (day==4) week='星期四';
  if (day==5) week='星期五';
  if (day==6) week='星期六';
  document.write(year+"年"+month+"月"+date+"日 "+week+"<br>"+hi);
};