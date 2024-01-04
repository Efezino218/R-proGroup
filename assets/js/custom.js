var App = (function(window){
  "use strict";
  var _this = null;
  var cacheCollection = {};
  return{
    init : function(){
      _this = this;   
      
      /* OUR PARTNERS */
      this.OurPartners();
      
      /* TESTIMONIAL */
      this.Testimonial();

      /* TESTIMONIAL FULL*/
      this.TestimonialFull(); 

      /* PORTFOLIO */
      this.Portfolio();

      /* SKILL GRAPH */
      this.SkillGraph();

      /* SEARCH TOGGLE */
      this.SearchToggle();

      /* PORTFOLIO LOAD MORE */
      this.PortfolioLoadMore();

      /* TOGGLE CUSTOM MENU */
      this.ToggleSubMenu();

      /* COUNT DOWN */
      this.CountDown();

      /* TABS */
      this.Tabs();

      /* ACCORDIAN */
      this.Accordian();

      /* CUSTOM SELECT */
      this.CustomSelect();

      /* ADDRESS SELECT */
      this.AddressSelect();

      /* ADDRESS SELECT */
      this.SideNav(); 

      /* NAVIGATION */
      this.Navigation(); 

      /* CUSTOMIZER TOGGLE */
      this.CustomizerToggle();

      /* CUSTOM DEMO IMAGES */
      this.CustomDemoImage();

      /* CUSTOM FOR LAYOUT */
      this.CustomFunctionLayout();

      /* CUSTOM FOR COLOR SKIN */
      this.CustomFunctionColorSkin();      

      /* FIXED HEADER */
      this.FixedHeader();

      /* CHART GRAPH */
      this.Chart();

      /* RANGE SLIDER */
      this.PriceRange();

      /* PRODUCT COUNTER */
      this.ProductCounter();

      /*  PRODUCT SLIDER */
      this.ProductSlider();

      /* CONTACT TABS */
      this.ContactTab();

      /* EXPAND SEARCH */
      this.ExpandSearch();

      /* TEAM CAROUSEL */
      this.TeamCarousel();

      /* BLOG CAROUSEL */
      this.BlogCarousel();

      /* MAIN SLIDER */
      this.MainSlide();
      
      /* MENU TOGGLE  */
      this.MenuToggle();

      /* SCROLL TO TOP */
      this.ScrollToTop();
  
      $(window).resize(function(){ 

       var window_width = $(window).width();
       if(window_width > 1023){
        $(".f-nav ul").each(function(){
          $(this).css('display','');
        });    
       }
 
      });

      $(window).scroll(function () {
        if( $(window).scrollTop() > 150){
          $(".f-stickey").addClass("f-scroll");
        }else{
          $(".f-stickey").removeClass("f-scroll");
        }

        $(document).scrollTop() > 500 ? $("#f-back_to_top").fadeIn() : $("#f-back_to_top").fadeOut()
      });

      $(window).load(function() {
        $("#f-loading").hide().delay(3000);
      });

    },

    getObject: function(selector){
      if(typeof cacheCollection[selector] == "undefined"){
        cacheCollection[selector] = $(selector);
      }
      return cacheCollection[selector];
    },

    OurPartners: function () {
      if ($('#f-partner_logos').length > 0) { 
        $('#f-partner_logos').owlCarousel({ 
            loop:true, 
            autoplay: true,
            responsive:{
                0:{items:1},
                600:{items:3},
                1000:{items:5}
            }
        })
      }
    },

    Testimonial: function () {
      if ($('#f-testimonial_carousel').length > 0) {
        $('#f-testimonial_carousel').owlCarousel({ 
            loop:true, 
            autoplay: false,
            dots: true,
            mouseDrag: false,
            responsive:{
                0:{items:1},
                600:{items:1},
                1000:{items:2}
            }
        })
      }
    },

    TestimonialFull: function () {
      if ($('#f-testimonial_carousel_full').length > 0) {
        $('#f-testimonial_carousel_full').owlCarousel({ 
            loop:true, 
            autoplay: false,
            dots: true,
            mouseDrag: false,
            responsive:{
                0:{items:1},
                600:{items:1},
                1000:{items:3}
            }
        })
      }
    }, 

    Portfolio: function () {
      if ($('#f-portfolio_listing').length > 0) {
        $('#f-portfolio_listing').owlCarousel({ 
            loop:true, 
            autoplay: false,
            dots: true,
            mouseDrag: false,
            responsive:{
                0:{items:1},
                600:{items:2},
                1000:{items:4}
            }
        })
      }
    },

    SkillGraph : function(){
      if (this.getObject('#f-skills').length > 0) {
        var targetOffset = $("#f-skills").offset().top; 
        $(window).scroll(function() {
          if($(window).scrollTop() > targetOffset){
            $(".f-skill_graph_single span.f-skill_val").each(function() {
              var GraphWidth = $(this).data('attr');
              $(this).parent().find("div.f-skill_graph_bar > div").css('width', GraphWidth+"%");   
            });
          }
        });
      }
    },

    SearchToggle : function() {
      $(".f-search_top > i.material-icons").on("click", function () {
        $(".f-search_box").toggleClass("f-search_box_toggle");
        $(this).toggleClass("f-search_toggle");
        $(".f-search_box form").find("input").val("");
      });
    },

    PortfolioLoadMore: function(){
      var flm = "#f-load_more";
      var fpi = ".f-portfolio-items > div";
      var mn = "#f-portfolio_grid";
      _this.getObject(flm).on("click",function(){ 
        var i = 0;
        var n = _this.getObject(fpi).length; 
        var j = 0; 
        var data_show = $(mn).attr("data-show"); 
        _this.getObject(fpi).each(function( index ) { 

          var data_attr = $(this).attr("data-attr"); 

          $('#f-portfolio_grid').shuffle( 'shuffle', "all" );
          if(data_attr == 0){
            if(i < data_show){
              $(this).fadeIn( "slow");
              $(this).attr("data-attr","1");
            }
            i++;
          }
          if(data_attr == 1){
            j++;
          }
        }); 
        var total_show = parseInt(j)+parseInt(data_show);
        if(total_show >= n){
          _this.getObject(flm).addClass("disable");
        }
      });
    },

    ToggleSubMenu : function(){
      $(".f-sub_menu").on("click", function(){
        $(this).find("ul").slideToggle();
        $(this).toggleClass("f-toggle_submenu");
      });
    },

    CountDown : function(){
       if (this.getObject('.f-countdown').length > 0) {
         var CountdownVal = $(".f-countdown").data("show");
         $('.f-countdown').countdown(CountdownVal, function(event) { 
            $(".f-countd_day").html(event.strftime('%D'));
            $(".f-countd_hour").html(event.strftime('%H'));
            $(".f-countd_min").html(event.strftime('%M'));
            $(".f-countd_sec").html(event.strftime('%S'));
         });
       }
    },

    Tabs : function(){
      if (this.getObject('.f-tabs').length > 0) {
      jQuery.jQueryTab({
          responsive: true, // enable accordian on smaller screens
          collapsible: true, // allow all accordions to collapse 
          useCookie: true, // remember last active tab using cookie
          openOnhover: false, // open tab on hover
          initialTab: 4, // tab to open initially; start count at 1 not 0

          cookieName: 'active-tab', // name of the cookie set to remember last active tab
          cookieExpires: 4, // when it expires in days or standard UTC time
          cookiePath: '/', // path on which cookie is accessible
          cookieDomain: '', // domain of the cookie
          cookieSecure: false, // enable secure cookie - requires https connection to transfer

          tabClass: 'f-tabs', // class of the tabs
          headerClass: 'accordion_tabs', // class of the header of accordion on smaller screens
          contentClass: 'f-tab_content', // class of container
          activeClass: 'active', // name of the class used for active tab

          tabTransition: 'fade', // transitions to use - normal or fade
          tabIntime: 500, // time for animation IN (1000 = 1s)
          tabOuttime: 0, // time for animation OUT (1000 = 1s)

          accordionTransition: 'slide', // transitions to use - normal or slide
          accordionIntime: 500, // time for animation IN (1000 = 1s)
          accordionOuttime: 400, // time for animation OUT (1000 = 1s)

          before: function() {}, // function to call before tab is opened
          after: function() {} // function to call after tab is opened
      });
      }
    },

    Accordian : function(){
      $(".f-accord_title").on("click", function(){
        $(".f-accord_single").removeClass("f-active_accord");
        $(this).parent().addClass("f-active_accord");
      });
    },

    CustomSelect : function(){
      $("form select").each(function(){
          $(this).wrap("<span class='f-select-wrapper'></span>");
          $(this).after("<span class='f-holder'></span>");
      });
      $("form select").on("change", function(){
          var selectedOption = $(this).find(":selected").text();
          $(this).next(".f-holder").text(selectedOption);
      }).trigger('change');
    },

    AddressSelect : function(){
      $(".f-selected_add").on("click", function(){
        $(".f-dropdown").slideToggle();
      });
      $("ul.f-dropdown li").on("click", function(){
        var address_val = $(this).data("value");
        $(".f-selected_add span").html($(this).html());
        $(".f-dropdown").slideToggle();
        $(".f-address_listing ul").hide();
        $(".f-address_listing ul."+address_val+"").show();
      });
    },

    SideNav : function(){ 
      if (this.getObject('#f-side_menu').length > 0) {
        $('#f-slide_menu').sideNav({'edge': 'left'}); 
        $(".f-card input").on("focus", function(){
          $(this).parent().addClass("f-focus");
        });
        $(".f-card input").on("focusout", function(){
          $(this).parent().removeClass("f-focus");
        });
      }  
    },

    Navigation : function(){
      var window_width = $(window).width();
      if(window_width < 1023){
        $(".f-nav nav ul li.f-has_child").on("click", function(e){
          $(this).toggleClass("f-slide_move")
          $(this).find("ul").slideToggle('fast');
          //e.preventDefault();
          //$(this).find("a:first").siblings("ul").slideToggle('fast');
          //$(this).toggleClass("f-slide_menu");
          //e.stopPropagation();
        });
      }  
    },

    CustomizerToggle : function(){
      $("#f-selector_icon").on("click", function(){
        $("#f-customizer").toggleClass("f-toggle");
      });
    },

    CustomDemoImage : function(){
      $("#f-selected_demo").on("click", function(){
        $("#f-dropdown_demo").slideToggle();
      });
      $("#f-header_demo").on("click", function(){
        $("#f-header_dropdown").slideToggle();
      });
      $("ul#f-dropdown_demo li").hover(function(){
         $(".f-demo_view").toggleClass("f-show_demo_img");
         var data_val = $(this).data("value");
         $(".f-demo_view img").attr("src","../assets/images/demo_view_0"+data_val+".jpg")
      });
      $("ul.f-dropdown_demo li").on("click", function(){
        var address_val = $(this).data("value");
        $(".f-selected_demo span").html($(this).html());
        $(".f-dropdown_demo").slideToggle();
        var data_src = $(this).data("src");
        if(data_src != ""){
          var url = document.URL;
          var url = url.slice(0, url.lastIndexOf('/'));
          var url = url.slice(0, url.lastIndexOf('/')); 
          var redirect_path = url+"/"+data_src;
          window.location.replace(redirect_path);
        }
      });
    },

    CustomFunctionLayout: function(){
      if($.cookie('layout') == 1){
        $(".f-layout_option img").each(function(){
          $(this).removeClass("f-active_skin");
          if($(this).attr('data-attr') == $.cookie("background")){
            $(this).addClass("f-active_skin");
          }
        }); 
        $(".f-wrapper").addClass("f-boxed_layout");
        $('.f-layout').trigger('click');
        $(".f-bg_img").show();

        if($.cookie('background') !== undefined){
         var bg_coki = $.cookie('background'); 
         $("body").css("background-image",'url("../assets/images/'+bg_coki+'.jpg")');
        }else{
          $("body").css("background-image",'');
        }

      }else{
        $(".f-wrapper").removeClass("f-boxed_layout"); 
        $("body").css("background-image",'');
        $(".f-bg_img").hide();
      }
      $(".f-layout").on("change", function() {
          if(this.checked) {  
            $.cookie("layout", 1); 
            $(".f-wrapper").addClass("f-boxed_layout");
            $(".f-bg_img").show();
          } else{
            $.cookie("layout", 0); 
            $("body").css("background-image",'');
            $(".f-wrapper").removeClass("f-boxed_layout");
            $(".f-bg_img").hide();
          }
      }); 
      $(".f-layout_option img").on("click",function(){
        var bg_attr = $(this).data("attr");
        $(".f-layout_option img").removeClass("f-active_bg");
        $(this).addClass("f-active_bg");
        
        $.cookie("background", bg_attr);
        $("body").css("background-image",'url("../assets/images/'+bg_attr+'.jpg")');
      }); 
    },

    CustomFunctionColorSkin : function(){
      var data_temp = $(".f-wrapper").data("template"); 
      switch (data_temp) {
          case 1:
              $.cookie("theme_skin","color_01");
              $.cookie("theme_path","london");
              break;
          case 2:
              $.cookie("theme_skin","color_02");
              $.cookie("theme_path","new_york");
              break;
          case 3:
              $.cookie("theme_skin","color_03");
              $.cookie("theme_path","zurich");
              break;
          case 4:
              $.cookie("theme_skin","color_04");
              $.cookie("theme_path","toronto");
              break;
          case 5:
              $.cookie("theme_skin","color_05");
              $.cookie("theme_path","mumbai");
              break;
          case 6:
              $.cookie("theme_skin","color_06");
              $.cookie("theme_path","paris");
              break; 
      } 
      if($.cookie("theme_skin") !== undefined){ 
        $(".f-color_skins img").each(function(){
          $(this).removeClass("f-active_skin");
          if($(this).attr('data-attr') == $.cookie("theme_skin")){
            $(this).addClass("f-active_skin");
          }
        }); 
          
        
        var href = "../assets/css/"+$.cookie("theme_path")+"/"+$.cookie("theme_skin")+".css";
        $(document).find("link#f-theme_roller").remove();
        var wjs = document.createElement('link');
        wjs.type = 'text/css';
        wjs.id = 'f-theme_roller';
        wjs.async = true;
        wjs.rel="stylesheet";
        wjs.href = href;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(wjs);
      }

      $(".f-color_skins img").on("click", function(){
        $("#f-loading").show().delay(2000).fadeOut();
        var data_theme = $(this).data("theme");
        var data_value = $(this).data("attr");
        $(".f-color_skins img").removeClass("f-active_skin");
        $(this).addClass("f-active_skin"); 

        $.cookie("theme_skin", data_value, {path: '/' }); 
        $.cookie("theme_path", data_theme, {path: '/' }); 

        var href = "../assets/css/"+data_theme+"/"+data_value+".css";
        $(document).find("link#f-theme_roller").remove();
        var wjs = document.createElement('link');
        wjs.type = 'text/css';
        wjs.id = 'f-theme_roller';
        wjs.async = true;
        wjs.rel="stylesheet";
        wjs.href = href;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(wjs);
      });
    },

    FixedHeader : function(){
      if($.cookie('stickey') == 1){ 

        $(".f-wrapper").addClass("f-stickey");
        $('.f-fixed_header').trigger('click'); 

      }else{
        $(".f-wrapper").removeClass("f-stickey");  
      }
      $(".f-fixed_header").on("change", function() {
          if(this.checked) {  
            $.cookie("stickey", 1); 
            $(".f-wrapper").addClass("f-stickey"); 
          } else{
            $.cookie("stickey", 0);  
            $(".f-wrapper").removeClass("f-stickey"); 
          }
      });
    },

    Chart : function(){
        if ($('#f-chart').length > 0) {
          $('#f-chart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Monthly Chart'
            },
            xAxis: {
                categories: ['JAN', 'FEB', 'MAR']
            },
            yAxis: {
                title: {
                    text: 'Chart'
                }
            },
            series: [{
                name: 'JAN',
                data: [1, 0, 4]
            }, {
                name: 'FEB',
                data: [5, 7, 3]
            }, {
                name: 'MAR',
                data: [5, 7, 1]
            }],
        });
      }
    },

    PriceRange : function (){
      if ($('#f-price_range').length > 0){ 
          var slider = document.getElementById('f-price_range');
          noUiSlider.create(slider, {
            start: [250, 2000],
            connect: true,
            range: {
              'min': 0,
              'max': 2000
            }
          })
          var valueInput = document.getElementById('f-value_input'),
            valueSpan = document.getElementById('f-value_span');
          // When the slider value changes, update the input and span
          slider.noUiSlider.on('update', function( values, handle ) {
            if ( handle ) {
              valueInput.value = values[handle];
            } else {
              valueSpan.innerHTML = values[handle];
            }
          });
          // When the input changes, set the slider value
          valueInput.addEventListener('change', function(){
            slider.noUiSlider.set([null, this.value]);
          });
      }
    },

    ProductCounter : function (){
      var mpc = ".f-prod_counter";
      if ($(mpc).length > 0){ 
        $("#f-prod_plus").on("click",function(){
          var prod_current = $("#f-prod_count").val(); 
          var plus_val = parseFloat(prod_current)+1; 
          $("#f-prod_count").val(plus_val);
        });
        $("#f-prod_minus").on("click",function(){
          var prod_current = $("#f-prod_count").val();
          if(prod_current == 1)
          {
            minus_val = 1;
          }else{ 
            var minus_val = parseFloat(prod_current)-1; 
          }
          $("#f-prod_count").val(minus_val);
        });
      }  
    },

    ProductSlider : function (){ 
        var mms = '.f-blog_slider';
        if ($(mms).length > 0){  
          var main_slider = $(mms).bxSlider({
            pager: false,
            controls: false,
            mode: "fade"
          });
          $($(".f-main_slide_nav").find('.f-slide_left')).on('click', function() { 
            main_slider.goToPrevSlide();
          });
          $($(".f-main_slide_nav").find('.f-slide_right')).on('click', function() { 
            main_slider.goToNextSlide();
          }); 
        }
    },

    ContactTab : function(){
       if ($('#f-contact_tab').length > 0){  
          $('#f-contact_tab').easyResponsiveTabs({
              type: 'vertical', //Types: default, vertical, accordion
              width: 'auto', //auto or any width like 600px
              fit: true, // 100% fit in a container
              closed: 'accordion', // Start closed if in accordion view
              tabidentify: 'hor_1', // The tab groups identifier
              activate: function(event) { // Callback function if tab is switched
                  var $tab = $(this);
                  var $info = $('#nested-tabInfo2');
                  var $name = $('span', $info);
                  $name.text($tab.text());
                  $info.show();
              }
          });
        }
  },

  ExpandSearch : function(){
    $(".f-search_head button").on("click", function(){
      $(this).parent().find("input").toggleClass("f-expand");
    });
  },

  TeamCarousel: function () {
    if ($('#f-team_carousel').length > 0) {
      $('#f-team_carousel').owlCarousel({ 
          loop:true, 
          autoplay: true,
          dots: true, 
          responsive:{
              0:{items:1},
              600:{items:2},
              1000:{items:3}
          }
      })
    }
  },

  BlogCarousel: function () {
    if ($('#f-blog_carousel').length > 0) {
      $('#f-blog_carousel').owlCarousel({ 
          loop:true, 
          autoplay: true,
          dots: true, 
          responsive:{
              0:{items:1},
              600:{items:2},
              1000:{items:2}
          }
      })
    }
  },

  MainSlide: function() { 
        var mms = '#f-slider';
        if ($(mms).length > 0){  
          var main_slider = $(mms).bxSlider({
            pager: true,
            autoplay: true,
            controls: false,
            mode: "fade"
          });
          $($(".f-main_slide_nav").find('.f-slide_left')).on('click', function() { 
            main_slider.goToPrevSlide();
          });
          $($(".f-main_slide_nav").find('.f-slide_right')).on('click', function() { 
            main_slider.goToNextSlide();
          }); 
        } 
  },

  MenuToggle : function(){
    $("#f-menu_toggle").on("click", function(){
      $(".f-header .f-nav_sec > div.f-nav").slideToggle();
    });
  },

  ScrollToTop : function(){
    $("#f-back_to_top").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    })
  }


 }
})(window);


$(document).ready(function($) {
  App.init();
});
 