'use strict';
/* jshint devel:true */
console.log('\'Allo \'Allo!');

$(function() {

  if ( $(window).width() >= 768 ) {
    $('.background').height( $(window).innerHeight() / 3);
  }

});
