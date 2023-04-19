$(document).ready(function () {

	$('#adv_categ').dropdown();
	$('#advanced_city').dropdown();
	$('#area').dropdown();
	$('#advanced_district').dropdown();
	$('#adv_categ2').dropdown();
	$('#advanced_city2').dropdown();
	$('#adv_categ3').dropdown();
	$('#adv_status').dropdown();



	$("#categlist li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#adv_categ").html(selText+' <span class="caret caret_filter"></span>');
  	$("#filter_cate").val(selText) ;
	});

	$("#adv-search-city li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#advanced_city").html(selText+' <span class="caret caret_filter"></span>');
  	$("#filter_city").val(selText) ;
	});

	$("#adv-search-advanced_district li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#advanced_district").html(selText+' <span class="caret caret_filter"></span>');
  	$("#filter_district").val(selText) ;
	});

	$("#search-area li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#area").html(selText+' <span class="caret caret_filter"></span>');
  	$("#filter_area").val(selText) ;
	});

	$("#categlist2 li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#adv_categ2").html(selText+' <span class="caret caret_filter"></span>');
  	$("#filter_cate2").val(selText) ;
	});

	$("#adv-search-city2 li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#advanced_city2").html(selText+' <span class="caret caret_filter"></span>');
  	$("#filter_city2").val(selText) ;
	});

	$("#categlist3 li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#adv_categ3").html(selText+' <span class="caret caret_filter"></span>');
  	$("#filter_categ3").val(selText) ;
	});

	$("#statuslist li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#adv_status").html(selText+' <span class="caret caret_filter"></span>');
  	$("#property_status").val(selText) ;
	});

	

	// nut menu an hien silebar dang mobile
    $("#iconmenumobile").on("click",function(){
    document.getElementById("mobilenav").style.visibility = "visible";
    document.getElementById("mobilenav").style.opacity = "1";
    document.getElementById("subpage").style.display = "block";
    document.getElementById("subcate").style.display = "none";
    document.getElementById("mobilenav").style.transform = "translate3d(0,0,0)";
    document.getElementById('iconmenumobile').style.visibility= "hidden";
    document.getElementById('iconmenumobile').style.opacity= "1";
    document.getElementsByClassName('backgroundmobile')[0].style= "top: 0px;left: 0px; position: fixed;width: 100%;height: 100%;z-index: 9999;background-color: rgba(0,0,0,.7);";
    });

    // button an hien menu con sidebar moblie
    $(".angledown").on("click", function() {
        var id = $(this).attr('id');
        id = "sub-"+id;
        $('#'+id).slideToggle();
    });
    // button an hien menu con sub_sidebar moblie 
    $(".angledown2").on("click", function() {
        var id = $(this).attr('id');
        id = "sub-"+id;
        $('#'+id).slideToggle();
    });

    // tab sidebar
    $(".mobile-tab-title").on("click",function(){
     	var title = $(this).attr("data-menu");
     	if(title == "pages"){
     	document.getElementById("subpage").style.display = "block";
     	document.getElementById("subcate").style.display = "none";
     	$('.mobile-categories-title').removeClass("active");
     	$('.mobile-pages-title').addClass("active");
     	}
     	else{
     	document.getElementById("subpage").style.display = "none";
     	document.getElementById("subcate").style.display = "block";
     	$('.mobile-categories-title').addClass("active");
     	$('.mobile-pages-title').removeClass("active");
     	}
    });

    // tat sidebar dang moblie
    $(".mobile-nav-close").on("click",function(){
    document.getElementById("mobilenav").style.visibility = "hidden";
    document.getElementById("mobilenav").style.opacity = "0";
    document.getElementById("mobilenav").style.transform = "translate3d(-330px,0,0)";
    document.getElementById('iconmenumobile').style.visibility="visible";
    document.getElementById('iconmenumobile').style.opacity="1";
    document.getElementsByClassName('backgroundmobile')[0].style= "";
    });

    $(".submit_action").on("click",function(){
    	document.getElementById('modal_login_wrapper').style.display = "block";
    });

    $("#login-modal_close").on("click",function(){
    	document.getElementById('modal_login_wrapper').style.display = "none";
    });
    
    
	$("#widget_login_topbar").on("click",function(){
    	document.getElementById('widget_register_topbar').style.display = "block";
    	document.getElementById('widget_login_topbar').style.display = "none";
    	document.getElementById('register-div-topbar').style.display = "none";
    	document.getElementById('register-div-title-topbar').style.display = "none";
    	document.getElementById('wp-login-but-topbar').style.display = "inline-flex";
    	document.getElementById('login-div-title-topbar').style.display = "block";
    	document.getElementById('login_message_area_topbar').style.display = "block";
    	document.getElementsByClassName('login-links')[0].style.display = "block";
    	document.getElementsByClassName('password_holder')[0].style.display = "block";
    	document.getElementById('forgot_pass_topbar').style.display = "block";
    	document.getElementById('login_user_topbar').style.display = "block";
    	document.getElementById('forgot-pass-div').style.display = "none";
    	document.getElementById('forgot-div-title-topbar').style.display = "none";
    });

    $("#widget_register_topbar").on("click",function(){
    	document.getElementById('widget_login_topbar').style.display = "block";
    	document.getElementById('widget_register_topbar').style.display = "none";
    	document.getElementById('register-div-topbar').style.display = "block";
    	document.getElementById('register-div-title-topbar').style.display = "block";
    	document.getElementById('wp-login-but-topbar').style.display = "none";
    	document.getElementById('login-div-title-topbar').style.display = "none";
    	document.getElementById('login_message_area_topbar').style.display = "none";
    	document.getElementsByClassName('login-links')[0].style.display = "none";
    	document.getElementsByClassName('password_holder')[0].style.display = "none";
    	document.getElementById('forgot_pass_topbar').style.display = "block";
    	document.getElementById('login_user_topbar').style.display = "none";
    	document.getElementById('forgot-pass-div').style.display = "none";
    	document.getElementById('forgot-div-title-topbar').style.display = "none";
    });
    
 	$("#forgot_pass_topbar").on("click",function(){
 		document.getElementById('forgot_pass_topbar').style.display = "none";
 		document.getElementById('widget_login_topbar').style.display = "none";
 		document.getElementById('widget_register_topbar').style.display = "block";

 		document.getElementById('register-div-topbar').style.display = "none";
    	document.getElementById('register-div-title-topbar').style.display = "none";
    	document.getElementById('wp-login-but-topbar').style.display = "none";
    	document.getElementById('login-div-title-topbar').style.display = "none";
    	document.getElementById('login_message_area_topbar').style.display = "none";
    	document.getElementsByClassName('login-links')[0].style.display = "none";
    	document.getElementsByClassName('password_holder')[0].style.display = "none";
    	document.getElementById('login_user_topbar').style.display = "none";
    	document.getElementById('forgot-pass-div').style.display = "block";
    	document.getElementById('forgot-div-title-topbar').style.display = "block";
    });

    $(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});


    $(".mobile-trigger-user").on("click",function(){
    	document.getElementById('mobilewrapperuser').style.visibility = "visible";
    	document.getElementById('mobilewrapperuser').style.opacity = "1";
    	document.getElementById("mobilewrapperuser").style.transform = "translate3d(0,0,0)";
    	
    });
	
	$(".mobilemenu-close-user").on("click",function(){
    	document.getElementById('mobilewrapperuser').style.visibility = "hidden";
    	document.getElementById('mobilewrapperuser').style.opacity = "0";
    	document.getElementById("mobilewrapperuser").style.transform = "translate3d(300px,0,0)";
    	document.getElementById("mobilewrapperuser").style.transition = "transform .25s ease";
    });

    $("#widget_register_mobile").on("click",function(){
    	document.getElementById('login-div_mobile').style.display = "none";
    	document.getElementById('login-div-title-mobile').style.display = "none";
    	document.getElementById('forgot-div-title-mobile').style.display = "none";
    	document.getElementById('forgot-pass-div-mobile').style.display = "none";
    	document.getElementById('register-div-mobile').style.display = "block";
    	document.getElementById('register-div-title-mobile').style.display = "block";
    });

    $("#widget_login_mobile").on("click",function(){
    	document.getElementById('login-div_mobile').style.display = "block";
    	document.getElementById('login-div-title-mobile').style.display = "block";
    	document.getElementById('forgot-div-title-mobile').style.display = "none";
    	document.getElementById('forgot-pass-div-mobile').style.display = "none";
    	document.getElementById('register-div-mobile').style.display = "none";
    	document.getElementById('register-div-title-mobile').style.display = "none";
    });
    
    $("#forgot_pass_mobile").on("click",function(){
    	document.getElementById('login-div_mobile').style.display = "none";
    	document.getElementById('login-div-title-mobile').style.display = "none";
    	document.getElementById('forgot-div-title-mobile').style.display = "block";
    	document.getElementById('forgot-pass-div-mobile').style.display = "block";
    	document.getElementById('register-div-mobile').style.display = "none";
    	document.getElementById('register-div-title-mobile').style.display = "none";
    });


    $("#return_login_mobile").on("click",function(){
    	document.getElementById('login-div_mobile').style.display = "block";
    	document.getElementById('login-div-title-mobile').style.display = "block";
    	document.getElementById('forgot-div-title-mobile').style.display = "none";
    	document.getElementById('forgot-pass-div-mobile').style.display = "none";
    	document.getElementById('register-div-mobile').style.display = "none";
    	document.getElementById('register-div-title-mobile').style.display = "none";
    });
   
	

	function isOnScreen(elem) {
        if( elem.length == 0 ) {
            return;
        }
        var $window = jQuery(window)
        var viewport_top = $window.scrollTop() //vị trí đang scroll
        var viewport_height = $window.height()  // chiều cao màn hình
        var viewport_bottom = viewport_top + viewport_height
        var $elem = jQuery(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height

        return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }


	function runOnScroll() {

		if(jQuery(window).scrollTop() >200 && ($(".header_bar").hasClass("master_header_sticky") == false)){
			$(".header_bar").addClass("master_header_sticky");
			$(".header_wrapper").addClass("customnav");
			document.getElementById("logo_image").src = "/asset/images/logo.png";
		}
		if(jQuery(window).scrollTop() <200 && ($(".header_bar").hasClass("master_header_sticky") == true)){
			$(".header_bar").removeClass("master_header_sticky");
			$(".header_wrapper").removeClass("customnav");
			document.getElementById("logo_image").src = "/asset/images/transparentopt.png";
		}
	}
	$(window).scroll(runOnScroll);

	 $(".adv_search_tab_item").on("click",function(){
        var item = $(".adv_search_tab_item");
        item.removeClass('active');
        $(this).addClass('active');
        var tabattr = $(this).attr("data");
        var tab = $(".tab-pane");
        tab.removeClass('active');
        $(tabattr).addClass('active');
    });

	let min = 10;
	let max = 100;

	const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);

	$('#rangeMin').on('input', function(e) {
	  const newValue = parseInt(e.target.value);
	  if (newValue > max) return;
	  min = newValue;
	  $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
	  $('#min').html(newValue);
	  $('#line').css({
	    'left': calcLeftPosition(newValue) + '%',
	    'right': (100 - calcLeftPosition(max)) + '%'
	  });
	});

	$('#rangeMax').on('input', function(e) {
	  const newValue = parseInt(e.target.value);
	  if (newValue < min) return;
	  max = newValue;
	  $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
	  $('#max').html(newValue);
	  $('#line').css({
	    'left': calcLeftPosition(min) + '%',
	    'right': (100 - calcLeftPosition(newValue)) + '%'
	  });
	});
});