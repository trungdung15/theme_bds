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

  $(".wp-select-option").scrollLock();
  $(".wp-select-option-price").scrollLock();
  $(".wp-select-option-size").scrollLock();

  function initScrollBar() {
    $(".wp-list-option-type-property").customScrollbar({
      skin: "default-skin",
      hScroll: false,
      animationSpeed: 200,
      wheelSpeed: 10,
    });
    $(".wp-list-option-type-property").customScrollbar({
      skin: "default-skin",
      hScroll: false,
      animationSpeed: 200,
      wheelSpeed: 10,
    });
    $(".wp-list-option-type-property").customScrollbar({
      skin: "default-skin",
      hScroll: false,
      animationSpeed: 200,
      wheelSpeed: 10,
    });
  }

  $(".select-item").click(function () {
    var element = $(this).data("element");
    $(".select-filter-wrapper")
      .not($(`.select-filter-wrapper${element}`))
      .addClass("d-none");
    $(`${element}`).toggleClass("d-none");
    initScrollBar();
  });

  $(document).click(function (event) {
    var clickedElement = event.target;
    var clickedElementNext = event.target.nextElementSibling;
    if ($(clickedElementNext).is(".far.fa-caret-down")) {
      clickedElement = event.target.parentElement;
    }
    if (
      !$(clickedElement).is(".select-filter-wrapper") &&
      !$(clickedElement).closest(".select-filter-wrapper").length &&
      !$(clickedElement).is(".select-item") &&
      !$(clickedElement).closest(".select-item").length &&
      !$(clickedElement).is(".select2-dropdown") &&
      !$(clickedElement).closest(".select2-dropdown").length
    ) {
      $(".select-filter-wrapper").addClass("d-none");
    }

    if(!$(clickedElement).is(".share") &&
    !$(clickedElement).closest(".share").length)
    $(".share_unit").addClass("display-none");
  });

  $(".btn-apply").click(function () {
    $(".select-filter-wrapper").addClass("d-none");
  });

  $(".single-select-field").select2({
    theme: "bootstrap-5",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-100")
      ? "100%"
      : "style",
    placeholder: $(this).data("placeholder"),
  });
  $(".multi-select-field").select2({
    theme: "bootstrap-5",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-100")
      ? "100%"
      : "style",
    placeholder: $(this).data("placeholder"),
    closeOnSelect: false,
  });

  $("#list-option-province").change(function () {
    var text = $(this).val();
    var textDefault = $("#list-option-province option:eq(1)").val();
    if (text != "") {
      $(".select-item-location").find("span").text(text);
    } else {
      $(".select-item-location").find("span").text(textDefault);
    }

    if (text != "" && text != textDefault) {
      $("#location-district-tab").removeClass("disabled");
      $("#location-district-tab")
        .closest("li")
        .removeClass("cursor-not-allowed");
      $("#location-street-tab").removeClass("disabled");
      $("#location-street-tab")
        .closest("li")
        .removeClass("cursor-not-allowed");
    }else{
      $("#location-district-tab").addClass("disabled");
      $("#location-district-tab")
        .closest("li")
        .addClass("cursor-not-allowed");
      $("#location-street-tab").addClass("disabled");
      $("#location-street-tab")
        .closest("li")
        .addClass("cursor-not-allowed");
      $("#location-wards-tab").addClass("disabled");
      $("#location-wards-tab")
        .closest("li")
        .addClass("cursor-not-allowed");
    }
  });

  $(".share").click(function () {
    $(".share_unit").not($(this).closest(".action").find(".share_unit")).addClass("display-none");
    $(this)
      .closest(".action")
      .find(".share_unit")
      .toggleClass("display-none");
  });
  $(document).scroll(function () {
    $(".share_unit").addClass("display-none");
  });

  $("#list-field").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });
  $("#list-company").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1350: {
        items: 4,
      },
    },
  });
  $("#pills-tabContent").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.taxonomy').click(function(){
    $('.taxonomy').removeClass('active');
    $(this).addClass('active');
    var element = $(this).data('type');
    $('.post-list').addClass('d-none');
    $(`${element}`).removeClass('d-none');
  });
});
