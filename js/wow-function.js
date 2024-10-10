$(document).ready(function () {
     // new WOW().init();
     if ($('.wow').length) {
          var wow = new WOW({
               boxClass: 'wow', // animated element css class (default is wow)
               animateClass: 'animated', // animation css class (default is animated)
               offset: 0, // distance to the element when triggering the animation (default is 0)
               mobile: false, // trigger animations on mobile devices (default is true)
               live: true // act on asynchronously loaded content (default is true)
          });
          wow.init();
     }

});