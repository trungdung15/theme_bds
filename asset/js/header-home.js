$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $("#wp-header").addClass("background-scroll-header");
      $("#wp-header .header_wrapper").addClass("header_wrapper_scroll");
      $("#wp-header .logo a").addClass("logo-scroll");
    } else {
      $("#wp-header").removeClass("background-scroll-header");
      $("#wp-header .header_wrapper").removeClass("header_wrapper_scroll");
      $("#wp-header .logo a").removeClass("logo-scroll");
    }
  });

  $(".tab-item").click(function () {
    $(".tab-item").removeClass("active");
    $(this).addClass("active");
  });

  $(".option-select .icon").click(function () {
    var checkbox = $(this).closest(".option-select").find(".form-check-input");
    if (checkbox.is(":checked")) {
      checkbox.prop("checked", false);
    } else {
      checkbox.prop("checked", true);
    }
  });
  $(".option-select .text-option").click(function () {
    var checkbox = $(this).closest(".option-select").find(".form-check-input");
    if (checkbox.is(":checked")) {
      checkbox.prop("checked", false);
    } else {
      checkbox.prop("checked", true);
    }
  });

  $("#slider_wp").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".wp-select-option").scrollLock({
    top: "top locked",
  });
  $(".wp-select-option-price").scrollLock({
    top: "top locked",
  });

  $(".select-button").click(function () {
    $(".wp-select-option").toggleClass("d-none");
	$(".wp-list-option-type-property").customScrollbar({
		skin: "default-skin",
		hScroll: false,
		animationSpeed: 200,
		wheelSpeed: 10,
	  });
  });
  $(".select-item-price").click(function () {
    $(".wp-select-option-price").toggleClass("d-none");
	$(".wp-list-option-type-property").customScrollbar({
		skin: "default-skin",
		hScroll: false,
		animationSpeed: 200,
		wheelSpeed: 10,
	  });
  });
  $(".select-item-size").click(function () {
    $(".wp-select-option-size").toggleClass("d-none");
	$(".wp-list-option-type-property").customScrollbar({
		skin: "default-skin",
		hScroll: false,
		animationSpeed: 200,
		wheelSpeed: 10,
	  });
  });

});
