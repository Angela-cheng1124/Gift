$(window).scroll(function(evt){
  if ($(window).scrollTop()>0) {
      $(".navbar").addClass("navbar-dark");
      $(".navbar").addClass("bg-dark");
      $(".navbar").removeClass("bg-light");
      $(".navbar").removeClass("navbar-light ");
  }
  else {
      $(".navbar").removeClass("navbar-dark");
      $(".navbar").removeClass("bg-dark");
      $(".navbar").addClass("bg-light");
      $(".navbar").addClass("navbar-light ");
  }
});

var s = skrollr.init();