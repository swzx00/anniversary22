var loginStatus = false; /* 模擬登入=true; 模擬登出=false*/
var coinAmount = 2;
var w = $(window).width();
console.log("登入狀態:" + loginStatus + "，硬幣數量：" + coinAmount);


/* Coin 前台顯示 START */
function showCoin() {
    $(".coin").find("span").text(coinAmount);
}
$(document).ready(function() {
    showCoin();
});
/* Coin 前台顯示 START */

function allDelete() { /*金幣顯示回復原始狀態*/
    showCoin();
    $(".coin").removeClass("d-none");
    $(".coin").removeClass("d-flex");
    $(".navbar").removeClass("justify-content-between");
    $(".navbar").removeClass("justify-content-center");
    $("#login").hide();
    $("#logout").hide();
    $("#viewTitle").hide();
    $("#view").hide();
    $("#productBtn").children(".series-register").hide();
    $("#productBtn").children(".series-exchange").hide();
    $("#productBtn").children(".btn.login").hide();
    $("#awardCheck").children("#textRegister").hide();
    $("#awardCheck").children("#textExchange").hide();
    $("#awardCheck").children(".btn.register").hide();
    $("#awardCheck").children(".btn.exchange").hide();
}

/* 判斷金幣顯示與否 START */
$(document).ready(function loWindowCoin() {
    allDelete()
    if (loginStatus == false) {
        $(".coin").addClass("d-none");
        $(".navbar").addClass("justify-content-center");
    } else {
        $(".coin").addClass("d-flex");
        $(".navbar").addClass("justify-content-between");
    }
});
/* 判斷金幣顯示與否 START */

/* 判斷登入與否，顯示相關按鈕 START */
$(document).ready(function() {
    allDelete();
    var urlPath = $(location).attr('pathname').toString();
    var urlA = urlPath.indexOf("/");
    var urlB = urlPath.indexOf(".");
    var url = urlPath.substr(urlA + 1, urlB - urlA - 1);
    if(loginStatus==true){
        allDelete();
        $("#logout").show();
        $("#view").show();
        $(".coin").addClass("d-flex");
        $(".navbar").addClass("justify-content-between");
        if(url == "product-intro-a"){
            $("#productBtn").children(".series-register").show();
        }else if(url == "product-intro-b"){
            $("#productBtn").children(".series-exchange").show();
        }
    }else{
        allDelete();
        $("#login").show();
        $("#viewTitle").show();
        $("#productBtn").children(".btn.login").show();
        $(".coin").addClass("d-none");
        $(".navbar").addClass("justify-content-center");
    }
});

/* Demo Login START */
function goLogin() {
    //alert("登入囉！！");
    loginStatus = true;
    allDelete();
    $("#logout").show();
    $("#ModalCheck").modal("hide");
    $(".coin").addClass("d-flex");
    $(".navbar").addClass("justify-content-between");
    $("#login-instructions").parent("div").hide();
    $("#view").show(); //Record 填寫資料區
    $(window).off("scroll.myScroll"); //隱藏GoTop
    console.log("登入狀態:" + loginStatus + "，硬幣數量：" + coinAmount);
    $("#productBtn").children(".btn.login").hide();
}
/* Demo Login END */

/* Demo Logout START */
function goLogout() {
    alert("現在即將Demo登出狀態！");
    loginStatus = false;
    allDelete();
    $("#login").show();
    $(".coin").addClass("d-none");
    $(".navbar").addClass("justify-content-center");
    $("#login-instructions").parent("div").show();
    $("#viewTitle").show(); //Record 登入按鈕
    console.log("登入狀態:" + loginStatus + "，硬幣數量：" + coinAmount);
    $("#productBtn").children(".btn.login").show();
    $("#productBtn").children(".series-register").hide();
    $("#productBtn").children(".series-exchange").hide();
}
/* Demo Logout END */

/* #ProductIntr 登入按鍵 START */
function goCheck(exchange) {
    $("#productBtn").find(".btn.login").hide();
    $("#productBtn").find(".series-register").css("display", "none");
    $("#productBtn").find(".series-exchange").css("display", "none");
    $("#textRegister").hide();
    $("#textExchange").hide();
    if (exchange == "goRegister") {
        $("#productBtn").find(".series-register").css("display", "flex");
    } else if (exchange == "goExchange") {
        $("#productBtn").find(".series-exchange").css("display", "flex");
    } else {
        console.log("Error!");
    }
}

function goAward(whichAward) {
    if (coinAmount < 3) { // 判斷硬幣數量，若少於3枚則顯示 不足!
        $("#ModalCheck").find("#coin-not").hide();
        $("#ModalCheck").find("#awardCheck").hide();
        $("#ModalCheck").find("#textRegister").hide();
        $("#ModalCheck").find("#textExchange").hide();
        $("#ModalCheck").find(".btn.register").hide();
        $("#ModalCheck").find(".btn.exchange").hide();
        $("#ModalCheck").find("#coin-not").show();
        $(".coin").find("span").text(coinAmount);
        console.log("登入狀態:" + loginStatus + "，硬幣數量：" + coinAmount);
    } else { // 判斷硬幣數量，顯示於跳窗!
        $("#ModalCheck").find("#coin-not").hide();
        $("#ModalCheck").find("#awardCheck").hide();
        $("#ModalCheck").find(".btn.exchange").hide();
        $("#ModalCheck").find("#awardCheck").show();
        $("#ModalCheck").find("#coin-count").text(coinAmount);
        $(".coin").find("span").text(coinAmount);
        if(whichAward=="Register"){
            $("#ModalCheck").find("#textRegister").show();
            $("#ModalCheck").find(".btn.register").show();
        }else{
            $("#ModalCheck").find("#textExchange").show();
            $("#ModalCheck").find(".btn.exchange").show();
        }
        console.log("登入狀態:" + loginStatus + "，硬幣數量：" + coinAmount);

    }
    coinAmount++;
    if (coinAmount > 12) {
        coinAmount = 0;
    }
}

function confirm(verify) {
    $("#ModalConfirm").find("#registerOk").hide();
    $("#ModalConfirm").find("#exchangeOk").hide();
    $("#ModalConfirm").find(".btn.btn-leave").hide();
    $("#ModalConfirm").find(".btn.btn-primary").hide();
    if (verify == "RegisterOk"){
        $("#ModalConfirm").find("#registerOk").show();
        $("#ModalConfirm").find("#exchangeOk").hide();
        $("#ModalConfirm").find(".btn.btn-leave").show();
        $("#ModalConfirm").find(".btn.btn-primary").show();
    }else if (verify == "ExchangeOk") {
        $("#ModalConfirm").find("#registerOk").hide();
        $("#ModalConfirm").find("#exchangeOk").show();
        $("#ModalConfirm").find(".btn.btn-leave").show();
        $("#ModalConfirm").find(".btn.btn-primary").show();
    } else {
        alert("似乎發生錯誤囉!請截圖，並與客服聯繫!");
    }
}

/* #ProductIntr 登入按鍵 END */
