$(document).ready(function () {
	$("#unit_list li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#sidebar_measure_unit_list").html(selText+' <span class="caret caret_sidebar"></span>');
  	$("#filter_unit_list").val(selText) ;
	});

	$("#sidebar-categlist4 li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#sidebar-adv_categ4").html(selText+' <span class="caret caret_sidebar"></span>');
  	$("#filter_cate4").val(selText) ;
	});

	$("#sidebar-adv-search-city5 li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#sidebar-advanced_city5").html(selText+' <span class="caret caret_sidebar"></span>');
  	$("#advanced_city5").val(selText) ;
	});

	$("#sidebar-adv-search-area6 li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#sidebar-advanced_area6").html(selText+' <span class="caret caret_sidebar"></span>');
  	$("#advanced_area6").val(selText) ;
	});

	$("#sidebar-search-bedrooms7 li").click(function(){
  	var selText = $(this).text();
  	selText = selText.trim();
  	$("#sidebar-bedrooms7").html(selText+' <span class="caret caret_sidebar"></span>');
  	$("#bedrooms7").val(selText) ;
	});

	$("#Rentals_sidebar").click(function(){
		document.getElementById('rentalssidebar').style.display = "block";
		document.getElementById('salessidebar').style.display = "none";
		document.getElementById('investsidebar').style.display = "none";
	});

	$("#Sales_sidebar").click(function(){
		document.getElementById('rentalssidebar').style.display = "none";
		document.getElementById('salessidebar').style.display = "block";
		document.getElementById('investsidebar').style.display = "none";
	});

	$("#Invest_sidebar").click(function(){
		document.getElementById('rentalssidebar').style.display = "none";
		document.getElementById('salessidebar').style.display = "none";
		document.getElementById('investsidebar').style.display = "block";
	});

	let min = 10;
	let max = 100;

	const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);

	$('#rangeMin2').on('input', function(e) {
	  const newValue = parseInt(e.target.value);
	  if (newValue > max) return;
	  min = newValue;
	  $('#thumbMin2').css('left', calcLeftPosition(newValue) + '%');
	  $('#min2').html(newValue);
	  $('#line2').css({
	    'left': calcLeftPosition(newValue) + '%',
	    'right': (100 - calcLeftPosition(max)) + '%'
	  });
	});

	$('#rangeMax2').on('input', function(e) {
	  const newValue = parseInt(e.target.value);
	  if (newValue < min) return;
	  max = newValue;
	  $('#thumbMax2').css('left', calcLeftPosition(newValue) + '%');
	  $('#max2').html(newValue);
	  $('#line2').css({
	    'left': calcLeftPosition(min) + '%',
	    'right': (100 - calcLeftPosition(newValue)) + '%'
	  });
	});

	$('#rangeMin3').on('input', function(e) {
	  const newValue = parseInt(e.target.value);
	  if (newValue > max) return;
	  min = newValue;
	  $('#thumbMin3').css('left', calcLeftPosition(newValue) + '%');
	  $('#min3').html(newValue);
	  $('#line3').css({
	    'left': calcLeftPosition(newValue) + '%',
	    'right': (100 - calcLeftPosition(max)) + '%'
	  });
	});

	$('#rangeMax3').on('input', function(e) {
	  const newValue = parseInt(e.target.value);
	  if (newValue < min) return;
	  max = newValue;
	  $('#thumbMax3').css('left', calcLeftPosition(newValue) + '%');
	  $('#max3').html(newValue);
	  $('#line3').css({
	    'left': calcLeftPosition(min) + '%',
	    'right': (100 - calcLeftPosition(newValue)) + '%'
	  });
	});


	$('#adv_extended_options_text_sidebar').click(function(){
		$('.extended_search_check_wrapper').addClass("active");
		document.getElementById('adv_extended_options_text_sidebar').style.display = "none";
		$('.adv_extended_close_sidebar').addClass("active");
	});
	$('#adv_extended_close_sidebar').click(function(){
		$('.extended_search_check_wrapper').removeClass("active");
		document.getElementById('adv_extended_options_text_sidebar').style.display = "block";
		$('.adv_extended_close_sidebar').removeClass("active");
	})

	
});