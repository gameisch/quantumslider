$("document").ready(function() {
    var owl = $('.owl-carousel');
    owl.on('initialized.owl.carousel', function(event){
        $(".owl-item:nth-child(4) div .bg-link").addClass("shadow");
    });
    $('#carousel').owlCarousel({
        center:false,
        autoWidth:true,
        items:5,
        lazyLoad: true,
        loop:false,
        margin:0,
        onChanged: callback,
        // responsiveClass:false,
        // merge:true,
        responsive:{
            0:{
                center: false,
                autoWidth:false,
                onChanged: callbackMedia,
                items:1
            },
            600:{
                center: false,
                autoWidth:false,
                onChanged: callbackMedia,
                items:2
            },
            1000:{
                center:false,
                autoWidth:true,
                items:3,
                onChanged: callbackMedia1000
                // center: true
            },
            1440:{
                center: false,
                autoWidth:true,
                items:3,
                onChanged: callback
            },
            1600:{
                items:5
            }
        }
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY<0) {
            owl.trigger('next.owl');
            $(".owl-item.active div .bg-link").removeClass("shadow");

        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    function callback(event) {
        items = event.item.count;
        item = event.item.index;
        if (item > 1){
            // console.log(item);
            $(".owl-item.active div .bg-link").removeClass("shadow");
            $(".owl-item.active:first-child div .bg-link").addClass("shadow2");
        }   else if (item < 1){
            // console.log(null);
            $(".owl-item.active:first-child div .bg-link").removeClass("shadow2");
            $(".owl-item.active:nth-child(4) div .bg-link").addClass("shadow");
        }
        event.preventDefault();
    }
    function callbackMedia(event) {
        items = event.item.count;
        item = event.item.index;
        if (item >= 0){
            console.log(item);
            $(".owl-item div .bg-link").removeClass("shadow");
            $(".owl-item div .bg-link").removeClass("shadow2");
        }
        event.preventDefault();
    }
    function callbackMedia1000(event) {
        items = event.item.count;
        item = event.item.index;
        if (item > 0){
            // console.log(item);
            $(".owl-item.active div .bg-link").removeClass("shadow");
            // $(".owl-item.active:first-child div .bg-link").addClass("shadow2");
        }   else if (item < 0){
            // console.log(null);
            $(".owl-item.active:first-child div .bg-link").removeClass("shadow2");
            $(".owl-item.active:nth-child(3) div .bg-link").addClass("shadow");
        } else{
            $(".owl-item.active:first-child div .bg-link").removeClass("shadow2");
            $(".owl-item.active:nth-child(3) div .bg-link").addClass("shadow");
        }
        event.preventDefault();
    }
    $(function(){
        var links = $('.transition3s > a.bg-link');
        $.each(links, function(index, value){
            console.log("INDEX: " + index + " VALUE: " + value);

            if($(window).width() < 700)
            {
                var link = $(this).css('background');
                var bg = link;
                bg = bg.replace('.png','@2x.png');
                b = $(this).css('background', bg);
                console.log(b);
            }
            // else if ($(window).width() < 1000)
            // {
            //     var link = $(this).css('background');
            //     var bg = link;
            //     bg = bg.replace('.png','@2x.png');
            //     b = $(this).css('background', bg);
            // }
            else {
                var link = $(this).css('background');
                var bg = link;
                bg = bg.replace('@2x.png', '.png');
                b = $(this).css('background', bg);
            }
        });
    });
    // function func2x() {
    //
    //
    //
    // }
    // func2x();
    // $(window).resize(function() {
    //     func2x();
    // });
});