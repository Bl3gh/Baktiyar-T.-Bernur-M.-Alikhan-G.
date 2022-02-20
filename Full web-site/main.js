var date = new Date();

var day = date.getDate();
var month = date.getMonth();

if(month == 0){
  month = " января"
}
if(month == 1){
  month = " февраля"

}
if(month == 2){
  month = " марта"
}
if(month == 3){
  month = " апреля"
}
if(month == 4){
  month = " мая"
}
if(month == 5){
  month = " июня"
}
if(month == 6){
  month = " июля"
}
if(month == 7){
  month = " августа"
}
if(month == 8){
  month = " сентября"
}
if(month == 9){
  month = " октября"
}
if(month == 10){
  month = " ноября"
}
if(month == 11){
  month = " декабря"
}

document.writeln(day + month);



$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},0);
  });
});
