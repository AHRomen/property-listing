(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        /* Navbar button */
        $(document).on('click', '.click-nav-right-icon', function(){
            $(".navbar-right-content").toggleClass("show-nav-content");
        });
        $(document).on('click', '.click-nav-left-icon', function(){
            $(".navbar-left-content").toggleClass("show-nav-content");
        });
        $(document).on('click', '.dashbord-toggle-icon', function(){
            $(".user-sidebar-left-menu-wraper").toggleClass("show");
        });
        $(document).on('click', '.profile-part', function(){
            $(".profile-item").toggleClass("show");
        });
       //Select2 dropedown
        $('.location-0').select2({
            placeholder: "Location",
        });
        $('.property-0').select2({
            placeholder: "Property"
        });
        $('.price-range-0').select2({
            placeholder: "Price Range",
        });
        $('.filter-widget.filter-location').select2({
            
        });
        $('.filter-widget.bed').select2({
            
        });
        $('.filter-widget.bath').select2({
           
        });
        $('.filter-widget.area').select2({    
            
        });
        $('.filter-widget.property-categories').select2({
            
        });
        $('.category-wraper #main-category').select2({
            placeholder: "Main Cetagory",
        });
        $('.category-wraper #sub-category').select2({
            placeholder: "Sub Category",
        });
        $('.category-wraper #child-category').select2({
            placeholder: "Child Category",
        });
        $('.general-information #bedroom').select2({
            placeholder: "4",
        });
        $('.general-information #bathroom').select2({
            placeholder: "4",
        });
        $('.general-information #kitchen').select2({
            placeholder: "4",
        });
        $('.area-input-waper #area-quantity').select2({
            placeholder: "Sqft",
        });
        $('.country-select-wraper #country').select2({
            placeholder: "Bangladesh",
        });
        $('.state-city-wraper #state').select2({
            placeholder: "Dhaka",
        });
        $('.state-city-wraper #city').select2({
            placeholder: "Gazipur",
        });
        //chose amenities
        $(document).on('click', '.single-amenities input', function(){
            let singleAmenities = $(this).closest(".single-amenities")
            singleAmenities.toggleClass("selected");
        });
        $(document).on('click', '.three-dots', function(){
            let option = $(this).siblings(".option");
            option.toggleClass("show");
        });
        $(document).on('click', '.option .publish', function(){
            $(this).toggleClass("published");
        });

    });
     /*-----------------------------------
            global slick slicer control
        -----------------------------------*/
        var globalSlickInit = $('.global-slick-init');
        if (globalSlickInit.length > 0) {
            //todo have to check slider item
            $.each(globalSlickInit, function (index, value) {
                if ($(this).children('div').length > 1) {
                    //todo configure slider settings object
                    var sliderSettings = {};
                    var allData = $(this).data();
                    var infinite = typeof allData.infinite == 'undefined' ? false : allData.infinite;
                    var arrows = typeof allData.arrows == 'undefined' ? false : allData.arrows;
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var focusOnSelect = typeof allData.focusonselect == 'undefined' ? false : allData.focusonselect;
                    var swipeToSlide = typeof allData.swipetoslide == 'undefined' ? false : allData.swipetoslide;
                    var slidesToShow = typeof allData.slidestoshow == 'undefined' ? 1 : allData.slidestoshow;
                    var slidesToScroll = typeof allData.slidestoscroll == 'undefined' ? 1 : allData.slidestoscroll;
                    var speed = typeof allData.speed == 'undefined' ? '500' : allData.speed;
                    var dots = typeof allData.dots == 'undefined' ? false : allData.dots;
                    var cssEase = typeof allData.cssease == 'undefined' ? 'linear' : allData.cssease;
                    var prevArrow = typeof allData.prevarrow == 'undefined' ? '' : allData.prevarrow;
                    var nextArrow = typeof allData.nextarrow == 'undefined' ? '' : allData.nextarrow;
                    var centerMode = typeof allData.centermode == 'undefined' ? false : allData.centermode;
                    var centerPadding = typeof allData.centerpadding == 'undefined' ? false : allData.centerpadding;
                    var rows = typeof allData.rows == 'undefined' ? 1 : parseInt(allData.rows);
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var autoplaySpeed = typeof allData.autoplayspeed == 'undefined' ? 2000 : parseInt(allData.autoplayspeed);
                    var lazyLoad = typeof allData.lazyload == 'undefined' ? false : allData.lazyload; // have to remove it from settings object if it undefined
                    var appendDots = typeof allData.appenddots == 'undefined' ? false : allData.appenddots;
                    var appendArrows = typeof allData.appendarrows == 'undefined' ? false : allData.appendarrows;
                    var asNavFor = typeof allData.asnavfor == 'undefined' ? false : allData.asnavfor;
                    var verticalSwiping = typeof allData.verticalswiping == 'undefined' ? false : allData.verticalswiping;
                    var vertical = typeof allData.vertical == 'undefined' ? false : allData.vertical;
                    var fade = typeof allData.fade == 'undefined' ? false : allData.fade;
                    var rtl = typeof allData.rtl == 'undefined' ? false : allData.rtl;
                    var variableWidth = typeof allData.variablewidth == 'undefined' ? false : allData.variablewidth;
                    var responsive = typeof $(this).data('responsive') == 'undefined' ? false : $(this).data('responsive');
                    //slider settings object setup
                    sliderSettings.infinite = infinite;
                    sliderSettings.arrows = arrows;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.focusOnSelect = focusOnSelect;
                    sliderSettings.swipeToSlide = swipeToSlide;
                    sliderSettings.slidesToShow = slidesToShow;
                    sliderSettings.slidesToScroll = slidesToScroll;
                    sliderSettings.speed = speed;
                    sliderSettings.dots = dots;
                    sliderSettings.cssEase = cssEase;
                    sliderSettings.prevArrow = prevArrow;
                    sliderSettings.nextArrow = nextArrow;
                    sliderSettings.rows = rows;
                    sliderSettings.autoplaySpeed = autoplaySpeed;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.verticalSwiping = verticalSwiping;
                    sliderSettings.vertical = vertical;
                    sliderSettings.variableWidth = variableWidth;
                    sliderSettings.rtl = rtl;

                    if (centerMode != false) {
                        sliderSettings.centerMode = centerMode;
                    }
                    if (centerPadding != false) {
                        sliderSettings.centerPadding = centerPadding;
                    }
                    if (lazyLoad != false) {
                        sliderSettings.lazyLoad = lazyLoad;
                    }
                    if (appendDots != false) {
                        sliderSettings.appendDots = appendDots;
                    }
                    if (appendArrows != false) {
                        sliderSettings.appendArrows = appendArrows;
                    }
                    if (asNavFor != false) {
                        sliderSettings.asNavFor = asNavFor;
                    }
                    if (fade != false) {
                        sliderSettings.fade = fade;
                    }
                    if (responsive != false) {
                        sliderSettings.responsive = responsive;
                    }
                    $(this).slick(sliderSettings);
                }
            });
        }

    /*-----------------------------------
        price range slider control
    -----------------------------------*/
    var stepsSlider = document.getElementById('price-range-bar');
    var input0 = document.getElementById('min-price');
    var input1 = document.getElementById('max-price');
    var inputs = [input0, input1];

    noUiSlider.create(stepsSlider, {
        start: [20, 80],
        connect: true,
        // tooltips: [true, wNumb({decimals: 1})],
        range: {
            'min': [0],
            '10%': [10, 10],
            '50%': [80, 50],
            '80%': 150,
            'max': 200
        }
    });
    stepsSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });

    /*-----------------------------------
      All Listing Filter open and hide
    ----------------------------------*/
    $(document).on('click', '.filter-btn', function(){
        $(".filter-widget-wraper, .black-shadow").toggleClass("show");
    });
    $(document).on('click', '.filter-head .close-icon', function(){
        $(".filter-widget-wraper").removeClass("show");
        $(".black-shadow").toggleClass("show");
    });


}(jQuery));