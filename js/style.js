/* Nav Border Scroll START */
$(function() {
    $(window).on("scroll.myScroll", function() {
        if ($(this).scrollTop() > 220) {
            $('nav').addClass("nav-border");
        } else {
            $('nav').removeClass("nav-border");
        }
    });
});

/* Awards.html Tab Title/Sequence- Change START */
$(document).ready(function() {
    $(".nav-tabs a.btn").click(function() {
        var tabId = $(this).attr('id');
        if(tabId=='tab-awards-01'){
            $("#tab-title-01").addClass("show").removeClass("d-none").addClass("d-block");
            $("#tab-title-02").removeClass("show").removeClass("d-block").addClass("d-none");
            $(".sort").addClass("sort-01").removeClass("sort-02");
            $(".sequence").children("div").removeClass("active");
        }else{
            $("#tab-title-01").removeClass("show").removeClass("d-block").addClass("d-none");
            $("#tab-title-02").addClass("show").addClass("d-block").removeClass("d-none");
            $(".sort").removeClass("sort-01").addClass("sort-02");
            $(".sequence").children("div").removeClass("active");
        }
    });
});

/* Record.html Table 無獎項狀態 START */
$(document).ready(function() {
    var checkTable = $(".record-table").children("tbody").hasClass("d-flex");
    if(checkTable==true){
        $(".record-table").children("tfoot").removeClass("d-flex").addClass("d-none");
    }else{
        $(".record-table").children("tfoot").removeClass("d-none").addClass("d-flex");
    };
});
/*** #Main START ***/


/* 點擊連結 開啟Tab START */
$(document).ready(function() {
    //先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
    var url = location.href;
    //再來用去尋找網址列中是否有資料傳遞(QueryString)
    if (url.indexOf("?") != -1) {
        var tab = "";
        //var tab2 = "";
        //在此直接將各自的參數資料切割放進ary中
        var ary = url.split("?")[1].split("&");
        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

        //下迴圈去搜尋每個資料參數
        for (i = 0; i <= ary.length - 1; i++) {
            //如果資料名稱為id的話那就把他取出來
            if (ary[i].split("=")[0] == "tab") {
                tab = ary[i].split("=")[1];
            }
            //if (ary[i].split("=")[0] == "tab2") {
            //  tab2 = ary[i].split("=")[1];
            //}
        }
    }
    $(`#tabAwards li:eq(${tab}) a`).tab("show");
    //$(`#tabs-w .con-w:eq(${tab1}) li:eq(${tab2}) a`).tab("show");
});
/* 點擊連結 開啟Tab END */
/*** #Main END ***/

/* 排序選單 箭頭變化(20220905更新) START */
$("#dropdownSequence").on('click', 'button', function() {
    var divP = $(this).parent("div");
    /*divP.toggleClass("dropup");*/
    divP.nextAll().children("button").removeClass("toggle-active");
    $(this).toggleClass("toggle-active");
    $("#dropdownSequence").children("div").removeClass("active");
    divP.addClass("active");
});
/* 排序選單 箭頭變化(20220905更新) END */

/* 膠囊式按鈕變化 START */
$(document).ready(function() {
    $("a.badge").click(function() {
        $("a.badge").removeClass("active");
        $(this).addClass("active");
    });
});
/* 膠囊式按鈕變化 END */

/* 下拉式選單 START */
function onSelectChange(val) {
    console.log($('#select-val').text())
    $('#select-val').text(val)
    console.log($('#select-val').text())
}

$(document).ready(function() {
    var optionsH = $(".options").offset().bottom + $(".options").outerHeight() > $(window).scrollTop();
    var howHeight = $("#main-product").height() - $(window).height();
    var productBtnTop = $("#productBtn").offset().top;
    var productBtnHeight = $("#productBtn").height();
    var footerTop = $("footer").offset().top;
    var calc =footerTop - productBtnTop + productBtnHeight;
    if(calc<300){
        $(".select-container").addClass("top-select");
    }else{
        $(".select-container").removeClass("top-select");
    }
});

/* 下拉式選單 END */



/*** #Awards END ***/