// init modules when doc is ready
jQuery(document).ready(function($) {
  //reset any and all of body main-menu menu-button top-bar
  $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
    if (Foundation.MediaQuery.atLeast('mlarge')) {

      $('#body').removeClass('nav-open');

      var $main_menu = $('#main-menu');
      if($main_menu.hasClass('show-for-mlarge') === false) {
        $main_menu.addClass('show-for-mlarge');
      }

      var $menu_button = $('#menu-button');
      if($menu_button.hasClass('fa-minus-circle')) {
        $menu_button.addClass('fa-bars').removeClass('fa-minus-circle');
      }
    }
  });

  var $banner_content = $(".banner-content");
  var $dropdown_menu = $("nav.main-nav ul.menu.dropdown");
  var home_hero_open = false;

  $dropdown_menu.on("show.zf.dropdownmenu", function(){
    if(home_hero_open) {
      $banner_content.css('visibility', 'hidden');
    }
    else {
      $banner_content.addClass("show-for-sr");
    }
  });

  $dropdown_menu.on("hide.zf.dropdownmenu", function(){
    if(home_hero_open) {
      $banner_content.css('visibility', 'visible');
    }
    else {
      $banner_content.removeClass("show-for-sr");
    }
  });

  // home_hero_read_more
  (function() {
    var $home_hero = $(".home-hero");

    $home_hero.find("a.plus").on("click", function(e) {
      e.preventDefault();
      if(home_hero_open === false) {
        $(this).attr("title", "See Less");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
        $home_hero.addClass("open");
        home_hero_open = true;
      } else {
        $(this).attr("title", "See More");
        $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
        $home_hero.removeClass("open");
        home_hero_open = false;
      }
    });
  })();

  // make_iframes_responsive
  $("iframe").wrap("<div class='responsive-embed widescreen' />");
});

// initialize Foundation
jQuery(document).foundation();
