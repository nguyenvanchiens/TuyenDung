document.addEventListener("DOMContentLoaded",function() {
        //Truy xuất div menu
    window.addEventListener("scroll",function(){    
        var scrollPos = $(window).scrollTop(),
        speed = 1;
        $(".job-detail__right").css("top", (0 + (scrollPos * speed)) + 'px');
    })
})