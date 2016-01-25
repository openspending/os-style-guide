jQuery(document).ready(function($){

  /*******************
    dropdown
  ********************/

  $(".dropdown > *").click(function(e) {
    e.preventDefault();
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      //$button.html($(this).html());
    });
  });


  /*******************
    accordion
  ********************/

  jQuery('.is-expanded .js-accordion-trigger').parent().find('.submenu').slideDown('fast');

  $('.is-expanded .js-accordion-trigger').bind('click', function(e){
    e.preventDefault();
    jQuery(this).parent().find('.submenu').slideUp('fast');
    jQuery(this).parent().removeClass('is-expanded');
  });

  $(':not(.is-expanded) .js-accordion-trigger').bind('click', function(e){
    e.preventDefault();
    jQuery(this).parent().find('.submenu').slideDown('fast');
    jQuery(this).parent().addClass('is-expanded');
  });

});
