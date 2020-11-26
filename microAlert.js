/**
 * https://github.com/VladimirIvanin/microAlert
 * v0.1.1
 */
function microAlert(message, user_timeout, options) {
  var timeout = user_timeout || 3000;
  var option = $.extend(true, {css: {}, id: null}, options);
  var uniq = new Date().getTime();

  if (!$('.micro-alert').length) {
    $('body').append($('<div>', {
      class: 'micro-alert'
    }));
  }

  $container = $('.micro-alert');
  var uniqClass = 'id-micro-alert' + uniq;
  var $item = $('<div>', {
    class: 'micro-alert-item ' + uniqClass,
    css: option.css,
  });

  if (typeof option.modificator == 'string') {
    $item.addClass('is-' + option.modificator);
  }

  $item.on('click', function () {
    $(this).remove();
  });

  $item.html(message);

  $container.append($item);

  setTimeout(function () {
    $('.' + uniqClass).remove();
  }, timeout);
}
