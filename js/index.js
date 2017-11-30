const data = [{
    label: '太原',
    value: 0
}, {
    label: '大同',
    value: 1
}, {
    label: '朔州',
    value: 2
}, {
    label: '阳泉',
    value: 3
}, {
    label: '运城',
    value: 4
}, {
    label: '忻州',
    value: 5
}, {
    label: '吕梁',
    value: 6
}, {
    label: '晋中',
    value: 7
}, {
    label: '临汾',
    value: 8
}, {
    label: '长治',
    value: 9
}, {
    label: '晋城',
    value: 10
}]
$(function () {
    // 选择所在城市
    $('#showPicker').on('click', function () {
        console.log($('#showPicker').text())
        weui.picker(data, {
            onChange: function (result) {
                $('#weui-picker-confirm').on('click', function () {
                    $('#showPicker').text(result[0].label)
                })
            }
        });
    });

    // 导航栏菜单的显示隐藏
    $(".nav_menu").click(function () {
        $(this).children("ul").slideToggle();
    })

    // 导航栏固定
    $(window).scroll(function () {
        if($(document).scrollTop() > 20) {
            $(".nav").addClass("bgnav");
            $(".nav_item").addClass("nav_item__scroll")
        } else {
            $(".nav").removeClass("bgnav");
            $(".nav_item").removeClass("nav_item__scroll")
        }
    })
    
    // 常见疑问手风琴
    $(".main_item__question").click(function(){
        var a = $(this);
        var b = $(".main_text__answer")
        if (a.next(b).is(":hidden")) {
            a.find('i').addClass("main_icon__up").removeClass("main_icon__question")
            a.next(b).show();
        } else { 
            a.find('i').addClass("main_icon__question").removeClass("main_icon__up")
            a.next(b).hide();
        }    
    })
})

// 导航栏点击跳转到指定位置
function clickScroll(ele, item) {
    var scroll_offset = $(ele).offset();
    $("body,html").animate({
        scrollTop: scroll_offset.top - $(".nav").height() * 4
    }, 1000);
    $(item).css({"background":"#ff5a37",color:"#fff"}).siblings().css({"background":"#f3f5f9","color":"#333"});

}

// ///滚动导航栏相应变色
$(window).scroll(function () {
    if($(this).scrollTop() >= 0 && $(this).scrollTop() < $("#pos2").offset().top- $(".nav").height()*4) {
        $(".nav_list__ele1").css({"background":"#ff5a37",color:"#fff"}).siblings().css({"background":"#f3f5f9","color":"#333"});
    } else if ( $(this).scrollTop() >= $("#pos2").offset().top- $(".nav").height()*4 && $(this).scrollTop() < $("#pos3").offset().top - $(".nav").height()*4){
        $(".nav_list__ele2").css({"background":"#ff5a37",color:"#fff"}).siblings().css({"background":"#f3f5f9","color":"#333"});
    } else if ( $(this).scrollTop() >= $("#pos3").offset().top - $(".nav").height()*4 && $(this).scrollTop() < $("#pos4").offset().top -$(".nav").height()*4){
        $(".nav_list__ele3").css({"background":"#ff5a37",color:"#fff"}).siblings().css({"background":"#f3f5f9","color":"#333"});
    } else if ( $(this).scrollTop() >= $("#pos4").offset().top -$(".nav").height()*4 && $(this).scrollTop() < $("#pos5").offset().top -$(".nav").height()*4){
        $(".nav_list__ele4").css({"background":"#ff5a37",color:"#fff"}).siblings().css({"background":"#f3f5f9","color":"#333"});
    } else {
        $(".nav_list__ele5").css({"background":"#ff5a37",color:"#fff"}).siblings().css({"background":"#f3f5f9","color":"#333"});
    }
});