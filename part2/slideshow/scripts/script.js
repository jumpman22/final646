$(document).ready(function(){
  $('.slidepics').slick({
      dots: true,
      arrows: false,
      autoplay: false,
			fade: true,
			customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a>' + (i+1) + '</a>';
			},
  });
});

