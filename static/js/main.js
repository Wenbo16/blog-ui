;$(function(){
    'use strict'

    let sideBar = $(".sidebar"),
        mask = $(".mask"),
        sideBarTrigger = $(".sidebar-trigger"),
        backToTop = $(".back-to-top");
    
    function showSideBar() {
        mask.fadeIn(); //显示遮罩区
        sideBar.css('right', 0);
    }

    function hideSideBar() {
        mask.fadeOut();
        sideBar.css('right', - sideBar.width())
    }

    function backTop() {
        $('html,body').animate({
            scrollTop: 0
        },800);
    }

    $(window).on('scroll', function () {
       if ($(window).scrollTop() > $(window).height())
           backToTop.fadeIn();
       else
           backToTop.fadeOut();
    });
    //模拟页面滚动事件
    $(window).trigger('scroll');

    sideBarTrigger.on('click', showSideBar);//点击更多显示slide
    mask.on('click', hideSideBar);//点击遮罩层隐藏slide
    backToTop.on('click', backTop);//返回顶部事件

});