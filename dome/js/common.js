$(function(){
    // 初始化
    bannerInit()
    console.log(window.innerHeight);//浏览器高度
    console.log($('.swiper-slide').height());//浏览器高度
})


// 初始化 banner
function bannerInit(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop : true,//无缝循环
        preventClicks : false,//默认true 点击滑动时禁止跳转
        pagination: {
            el: '.swiper-pagination',
            bulletElement : 'li',
            clickable :true,
        },
    })
}

// 初始化案例中心分页
