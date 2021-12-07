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

var town = document.getElementById("town"),
  glctx = town.getContext('2d'),
  data, snowflake, glctx2, rafAnim = null;
town.width = town.offsetWidth;
town.height = town.offsetWidth,
  amount = 1000;
var img = new Image();
img.onload = function() {
  glctx.drawImage(img, 0, 0, 800, 800, 0, 0, town.width, town.height);
  data = glctx.getImageData(0, 0, town.width, town.height).data;
  snowflake = document.getElementById("snowFlakes");
  glctx2 = snowflake.getContext('2d');
  snowflake.width = town.offsetWidth;
  snowflake.height = town.offsetWidth;
  initSnow();
}
img.crossOrigin = "Anonymous";
img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/town.svg?v2";

var globeFlakes;

function initSnow() {
  window.addEventListener("click", shakeGlobe);
  window.addEventListener("touchstart", shakeGlobe);
  glctx2.fillStyle = "rgba(255,255,255,0.7)";
  var radius = town.width * 0.2875;
  var offsetX = town.width / 2;
  var offsetY = town.width * 0.4;
  globeFlakes = [];
  for (var i = 0; i < amount; i++) {
    globex = Math.random() * 2 * radius - radius;
    ylim = Math.sqrt(radius * radius - globex *globex);
    globey = Math.random() * ylim - ylim;
    globeFlakes.push(new Flake(globex + offsetX, globey + offsetY));
  }
  if (rafAnim === null) {
    rafAnim = requestAnimationFrame(render);
  }
}

function Flake(globex, globey, color) {
  this.globex = Math.floor(globex);
  this.globey = Math.floor(globey);
  for (var i = this.globey; i < town.width; i++) {
    if (data[((this.globex + (town.width * i)) * 4 + 3)] > 10) {
      destination = parseInt(i - 1);
      i = town.width;
    } else {
      destination = town.width;
    }
  }
  this.finalY = destination;
  this.r = Math.random() * 2;
  this.speedY = Math.random() + 0.2;
}
Flake.prototype.render = function() {
  if (this.finalY > this.globey) {
    this.globey += this.speedY;
  }
  glctx2.beginPath();
  glctx2.arc(this.globex, this.globey, this.r, Math.PI * 2, false);
  glctx2.fill();
}

function render(a) {
  requestAnimationFrame(render);
  glctx2.clearRect(0, 0, snowflake.width, snowflake.height);
  for (var i = 0; i < amount; i++) {
    globeFlakes[i].render();
  }
};

function shakeGlobe() {
  window.removeEventListener("click", shakeGlobe);
  window.removeEventListener("touchstart", shakeGlobe);
  $("#globe, .globe-txt").on("click", function () {
    var globe = document.getElementById("globe");
    TweenMax.to(snowflake, 0.5, {
      opacity: 0
    });
    TweenMax.to(globe, .1, {
      rotationZ: 25,
      ease: Quad.easeInOut,
      yoyo: true,
      repeat: 5,
      onComplete: initSnow
    })
    TweenMax.to(snowflake, 0.5, {
      opacity: 1,
      delay: "0.6"
    });
  });
}

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


