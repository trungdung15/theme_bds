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
    if ($(this).hasClass("tab-item-project")) {
      $(".select-item-size").addClass("d-none");
      $(".select-item-status").removeClass("d-none");
      $(".select-button-default").addClass("d-none");
      $(".select-button-project").removeClass("d-none");
    } else {
      $(".select-item-size").removeClass("d-none");
      $(".select-item-status").addClass("d-none");
      $(".select-button-default").removeClass("d-none");
      $(".select-button-project").addClass("d-none");
    }
    initScrollBar();
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

  $(".select-filter-wrapper").scrollLock();

  function initScrollBar() {
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
      !$(clickedElement).closest(".select2-dropdown").length &&
      !$(clickedElement).is(".select2-selection__choice__remove")
    ) {
      $(".select-filter-wrapper").addClass("d-none");
    }

    if (
      !$(clickedElement).is(".share") &&
      !$(clickedElement).closest(".share").length
    )
      $(".share_unit").addClass("display-none");
  });

  $(".clear-select-filter").click(function () {
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=text]").val("");
    $("select").val(null).trigger("change");
  });

  $(".btn-clear-select").click(function () {
    var element = $(this).closest(".select-filter-wrapper");
    element.find("input[type=checkbox]").prop("checked", false);
    element.find("select").val(null).trigger("change");
    element
      .find(".nav-item")
      .not(".nav-location-province-tab")
      .addClass("cursor-not-allowed");
    $("#location-wards-tab").addClass("disabled");
    $("#location-province-tab").click();
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
      $("#location-street-tab").closest("li").removeClass("cursor-not-allowed");
    } else {
      $("#location-district-tab").addClass("disabled");
      $("#location-district-tab").closest("li").addClass("cursor-not-allowed");
      $("#location-street-tab").addClass("disabled");
      $("#location-street-tab").closest("li").addClass("cursor-not-allowed");
      $("#location-wards-tab").addClass("disabled");
      $("#location-wards-tab").closest("li").addClass("cursor-not-allowed");
    }
  });

  $("#list-option-district").change(function () {
    var value = $(this).val();
    if (value.length) {
      $("#location-wards-tab").removeClass("disabled");
      $("#location-wards-tab").closest("li").removeClass("cursor-not-allowed");
    } else {
      $("#location-wards-tab").addClass("disabled");
      $("#location-wards-tab").closest("li").addClass("cursor-not-allowed");
    }
  });

  $(".share").click(function () {
    $(".share_unit")
      .not($(this).closest(".action").find(".share_unit"))
      .addClass("display-none");
    $(this).closest(".action").find(".share_unit").toggleClass("display-none");
  });
  $(document).scroll(function () {
    $(".share_unit").addClass("display-none");
  });

  $("#list-field").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      800: {
        items: 3,
      },
    },
  });
  $(".nav-best-prj-slider").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      800: {
        items: 3,
      },
    },
  });
  $("#list-company").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 2,
      },
      300: {
        items: 3,
      },
      500: {
        items: 4,
      },
      900: {
        items: 5,
      },
    },
  });

  $(".taxonomy").click(function () {
    $(".taxonomy").removeClass("active");
    $(this).addClass("active");
    var element = $(this).data("type");
    $(".post-list").addClass("d-none");
    $(`${element}`).removeClass("d-none");
  });
  $(".container-best-product .owl-item .nav-item .nav-link").click(function () {
    $(".container-best-product .owl-item .nav-item .nav-link").removeClass(
      "active"
    );
    $(this).addClass("active");
  });

  $('#input-search-mobile').focus(function(){
    $('.btn-open-form-search-mobile').click();
  });

  $('.item-nav-tab').click(function(){
    $('.item-nav-tab').removeClass('active');
    $(this).addClass('active');
  });
});
