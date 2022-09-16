//$('#countdown').countdown('2022/11/11 08:30:00')
//    .on('update.countdown', function(event) {
//        var formata = '<div class=\'marquee-title\'>11/11起&nbsp;正式兌換&nbsp;/&nbsp;登記獎項&nbsp;活動倒數計時：</div><div class=\'marquee-time\'>'; /*兩行*/
//        /*var formata = '<div>11 / 11 起 正式兌(抽)獎&nbsp;活動倒數計時：';*/ /*單行*/
//        var formatb = '%H 時 %M 分 %S 秒</div>';
//        var format = formata + formatb;
//        //alert(event.offset.minutes);
//        if (event.offset.totalDays > 0) {
//            format = formata + '%D 日 ' + formatb;
//       }
//        /*if(event.offset.weeks > 0) {
//            format = '%-w week%!w ' + format;
//        }*/
//        $(this).html(event.strftime(format));
//    })
//    .on('finish.countdown', function(event) {
//        $(this).html('活動正式開跑啦！!')
//            .parent().addClass('disabled');
//    });

// Set the date we're counting down to
var countDownDate = new Date("2022/11/11 08:30:00").getTime();//活動開始時間
var countDownDate2 = new Date("2023/01/11 23:59:00").getTime();//活動截止時間

var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;
var distance2 = countDownDate2 - now;

// Time calculations for NowDays, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

var text = '<div class=\'marquee-title\'>11/11起&nbsp;正式兌換&nbsp;/&nbsp;登記獎項&nbsp;活動倒數計時：</div><div class=\'marquee-time\'>'
function format(days,hours, minutes,seconds){
    $(".marquee-title").html(text);
    if(days<=0 && hours>0 && minutes>0 && seconds>0){
        $("#countdown").html(hours+"時"+minutes+"分"+seconds+"秒");
        console.log(days+"日"+hours+"時"+minutes+"分"+seconds+"秒");
    }else if(days<=0 && hours<=0 && minutes>0 && seconds>0){
        $("#countdown").html(minutes+"分"+seconds+"秒");
    }else if(days<=0 && hours<=0 && minutes<=0 && seconds>0){
        $("#countdown").html(seconds+"秒");
    }else if(days<=0 && hours<=0 && minutes<=0 && seconds<=0){
        $("#countdown").html("");
    }else{
        $("#countdown").html(days+"日"+hours+"時"+minutes+"分"+seconds+"秒");
    }
}
format(days,hours, minutes,seconds);

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    var distance2 = countDownDate2 - now;


    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element"
    format(days,hours, minutes,seconds);

    // If the count down is finished, write some text
    if (distance <=0 && distance2 >0) {
        $(".marquee").html("活動正式開跑啦！!");
    }else if(distance <=0 && distance2 <=0){
        clearInterval(x);
        $(".marquee").html("活動已經截止囉！!");
        $(".series-register a.btn.register").attr("disabled","true");
        $(".series-exchange a.btn.exchange").attr("disabled","true");
        $(".series-exchange .select-container").attr("disabled","true");
    }
}, 1000);