$(function() {
  $(document).scroll(function() {
    var $nav = $('.navbar')
    $nav.toggleClass('scrolled', $(this).scrollTop() > ($('.welcome').height() - 50))
  })
  $(window).scroll(function(){
    var $wScroll = $(this).scrollTop()
    console.log($wScroll);
    
    $('.name').css({
      'transform' : 'translate(0px, '+ $wScroll /2 +'%)'
    })
    $('.title').css({
      'opacity' : Math.floor($wScroll) + '.0'
    })
  })
})
