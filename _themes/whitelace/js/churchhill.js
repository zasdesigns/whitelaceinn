jQuery(document).ready(function($){
  $('.flexslider').flexslider({
    controlNav: false,
    directionNav: false
  });

  $('.flexslider-2').flexslider({
    directionNav: false
  });

  $('.display-list').click(function(){
    $('.room').each(function(){
      $('.rooms.grid').removeClass('grid').addClass('list');
      $(this).addClass('row-fluid');
      $(this).find('> div').addClass('span12');
      $(this).find('> div > div').addClass('span6');
    });
    return false;
  });

  $('.display-grid').click(function(){
    $('.room').each(function(){
      $('.rooms.list').removeClass('list').addClass('grid');
      $(this).removeClass('row-fluid');
      $(this).find('> div').removeClass('span12');
      $(this).find('> div > div').removeClass('span6');
    });
    return false;
  });


});
