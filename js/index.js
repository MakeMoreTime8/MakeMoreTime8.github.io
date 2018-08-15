$(function() {
    var timer = null;
    var num = 0;


    timer = setInterval(function() {
        num++;
        if(num > $(".container > ul > li").length - 1) {
            num = 0
        }
        
        $(".container > ul > li").each(function(index, ele) {
            $(ele).fadeOut(500).removeClass("active");
            $(".container > ol > li").removeClass("current")

        })
        
        $(".container > ul > li").eq(num).fadeIn(100, function() {
            if(num == $(".container > ul > li").length - 1) {
                $(".container > ul > li").eq(num).addClass("active");
            }
        })
        $(".container > ol > li").eq(num).addClass("current")
    }, 4000)
})