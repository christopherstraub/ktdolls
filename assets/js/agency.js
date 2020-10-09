/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top',
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
  $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function () {
  var modal = this;
  var hash = modal.id;
  window.location.hash = hash;
  window.onhashchange = function () {
    if (!location.hash) {
      $(modal).modal('hide');
    }
  };
});
