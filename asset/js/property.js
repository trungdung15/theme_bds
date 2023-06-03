$(document).ready(function () {
  $("#property_slider_carousel").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    autoHeight: true,
    items: 1,
  });

  $(".item-sub-slider").click(function () {
    $(".item-sub-slider").removeClass("active");
    $(".item-sub-slider").not($(this)).addClass("inactive");
    $(this).removeClass("inactive");
    $(this).addClass("active");

    var itemTarget = $(this).data("target");
    var height = $("#carousel-listing").height();
    var center = height / 2;
    var childElement = $(this);
    var heightElement = childElement.height();
    var parentElement = $("#carousel-indicators-vertical");
    var parentOffsetTop = parentElement.offset().top;
    var childPositionTop = childElement.offset().top;
    var distance = childPositionTop - parentOffsetTop;

    if (distance > center) {
      var newPositionTop =
        parentOffsetTop - childPositionTop - heightElement / 2 + center;

      parentElement.animate(
        {
          top: newPositionTop,
        },
        300
      );
    } else {
      parentElement.animate(
        {
          top: 0,
        },
        300
      );
    }
    $(".owl-carousel").trigger("to.owl.carousel", [itemTarget]);
  });

  $(".owl-carousel").on("changed.owl.carousel", function (event) {
    setTimeout(function () {
      var currentElement = $(event.target).find(".owl-item.active");
      var elementSubSlider = currentElement.find(".item-slider").data("target");
      $("#carousel-indicators-vertical").find(`.${elementSubSlider}`).click();
    }, 100);
  });
});
