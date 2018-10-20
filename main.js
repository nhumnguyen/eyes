
$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  var e1 = (eye.offset().left) + (eye.width() / 2);
  var e2 = (eye.offset().top) + (eye.height() / 2);
  var r = Math.atan2(event.pageX - e1, event.pageY - e2);
  var rotation = (r * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rotation + 'deg)',
    '-moz-transform': 'rotate(' + rotation + 'deg)',
    '-ms-transform': 'rotate(' + rotation + 'deg)',
    'transform': 'rotate(' + rotation + 'deg)'
  });
});