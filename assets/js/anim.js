(function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  window.requestAnimationFrame = requestAnimationFrame;
})();

var flakes = [],
  snowAnim = document.getElementById("snowAnim"),
  snowctx = snowAnim.getContext("2d"),
  flakeCount = 200,
  mX = -100,
  mY = -100;

snowAnim.width = window.innerWidth;
snowAnim.height = window.innerHeight;

function snow() {
  snowctx.clearRect(0, 0, snowAnim.width, snowAnim.height);

  for (var i = 0; i < flakeCount; i++) {
    var flake = flakes[i],
      x = mX,
      y = mY,
      minDist = 200,
      x2 = flake.x,
      y2 = flake.y;

    var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
      dx = x2 - x,
      dy = y2 - y;

    if (dist < minDist) {
      var force = minDist / (dist * dist),
        xcomp = (x - x2) / dist,
        ycomp = (y - y2) / dist,
        deltaV = force / 2;

      flake.velX -= deltaV * xcomp;
      flake.velY -= deltaV * ycomp;
    } else {
      flake.velX *= 0.98;
      if (flake.velY <= flake.speed) {
        flake.velY = flake.speed;
      }
      flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
    }

    snowctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
    flake.y += flake.velY;
    flake.x += flake.velX;

    if (flake.y >= snowAnim.height || flake.y <= 0) {
      reset(flake);
    }

    if (flake.x >= snowAnim.width || flake.x <= 0) {
      reset(flake);
    }

    snowctx.beginPath();
    snowctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    snowctx.fill();
  }
  requestAnimationFrame(snow);
}

function reset(flake) {
  flake.x = Math.floor(Math.random() * snowAnim.width);
  flake.y = 0;
  flake.size = Math.random() * 3 + 2;
  flake.speed = Math.random() * 1 + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = Math.random() * 0.5 + 0.3;
}

function init() {
  for (var i = 0; i < flakeCount; i++) {
    var x = Math.floor(Math.random() * snowAnim.width),
      y = Math.floor(Math.random() * snowAnim.height),
      size = Math.random() * 3 + 2,
      speed = Math.random() * 1 + 0.5,
      opacity = Math.random() * 0.5 + 0.3;

    flakes.push({
      speed: speed,
      velY: speed,
      velX: 0,
      x: x,
      y: y,
      size: size,
      stepSize: Math.random() / 30,
      step: 0,
      opacity: opacity
    });
  }

  snow();
}

snowAnim.addEventListener("mousemove", function (e) {
  (mX = e.clientX), (mY = e.clientY);
});

window.addEventListener("resize", function () {
  snowAnim.width = window.innerWidth;
  snowAnim.height = window.innerHeight;
});

init();

var giftbox = anime({
  targets: '.gift-wrapper',
  translateX: [
    { value: '-25%' },
    { value: '20%'  },
    { value: '-15%' },
    { value: '10%'  },
    { value: '-5%'  },
    { value: '0%'   },
  ],
  rotate: [
    { value: '-5deg' },
    { value: '3deg'  },
    { value: '-3deg' },
    { value: '2deg'  },
    { value: '-1deg'  },
    { value: '0deg'   },
  ],
  scale: [0.6, 0.6],
  duration: 800,
  delay: 4000,
  easing: 'easeInElastic',
  loop: true,
})


