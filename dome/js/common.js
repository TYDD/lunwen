$(function(){
    // 初始化
    // bannerInit()
    // headerNavLink()
    // window.location.href='index.html'
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.pathname);
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

// 导航连接
 function headerNavLink(){
     $('header nav li').on('click',function(event){
          let e = window.event || event;//兼容所有浏览器
          let navTexy  = e.target ;
          console.log( window.location.pathname, window.location.href);
            switch (navTexy.innerText) {
                case '网站首页':
                $(location).attr('href', 'index.html');
                    break;
                case '关于我们':
                $(location).attr('href', './pageNav/about.html');
                    break;
                case '产品中心':
              
                    break;
                case '新闻资讯':
               
                    break;
                case '在线预约':
               
                    break;
                case '联系我们':
               
                    break;
            }
     })
 }
