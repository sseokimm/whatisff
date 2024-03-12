$(document).ready(function() {
  function makeItFloat($element) {
    
    if (!$element.hasClass('active')) {
      var newPosX = Math.floor(Math.random() * ($(window).width() - $element.width()));
      var newPosY = Math.floor(Math.random() * ($(window).height() - $element.height()));

      $element.animate({
        'top': newPosY,
        'left': newPosX
      }, 2000, function() {
        makeItFloat($element);
      });
    }
  }

  $('.floating-image img').click(function() {
    var $parent = $(this).parent();

    
    $parent.toggleClass('active');

    if ($parent.hasClass('active')) {
      
      $parent.stop().animate({
        'top': '25%',
        'left': 0,
        'transform': 'translateY(-50%)' 
      }, 1000);
    } else {
   
      makeItFloat($parent);
    }

  
    $(this).next('.image-description').fadeToggle();
  });

 
  $('.floating-image').each(function() {
    makeItFloat($(this));
  });
});
