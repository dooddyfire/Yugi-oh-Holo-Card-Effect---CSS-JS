var $cards = $(".card");
  var $style = $(".hover");
  $cards.on("mousemove", function(e) {
    var $card = $(this);
    var l = e.offsetX;
    var t = e.offsetY;
    var h = $card.height();
    var w = $card.width();
    var lp = Math.abs(Math.floor(100 / w * l)-100);
    var tp = Math.abs(Math.floor(100 / h * t)-100);
    var lp2 = (50 - (Math.abs(Math.floor(100 / w * l)-100))/10)+5;
    var tp2 = (50 - (Math.abs(Math.floor(100 / h * t)-100))/10)+5;
    var ty = (tp - 50)/2;
    var tx = ((lp - 50) * .5) * -1;
    var bg = `background-position: ${lp}% ${tp}%;`
    var bg2 = `background-position: ${lp2}% ${tp2}%;`
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
    var style = `
      .card.active:before { ${bg} }
      .card.active:after { ${bg2} }
      .card.active { ${tf} }
    `
    $cards.removeClass("active");
    $card.addClass("active");
    $style.html(style);
  }).on("mouseout", function() {
    $cards.removeClass("active");
  });