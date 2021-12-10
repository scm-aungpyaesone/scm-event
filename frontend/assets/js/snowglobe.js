var town = document.getElementById("town"),
  glctx = town.getContext("2d"),
  data,
  snowflake,
  glctx2,
  rafAnim = null;
town.width = town.offsetWidth;
(town.height = town.offsetWidth), (amount = 1000);
var img = new Image();
img.onload = function () {
  glctx.drawImage(img, 0, 0, 800, 800, 0, 0, town.width, town.height);
  data = glctx.getImageData(0, 0, town.width, town.height).data;
  snowflake = document.getElementById("snowFlakes");
  glctx2 = snowflake.getContext("2d");
  snowflake.width = town.offsetWidth;
  snowflake.height = town.offsetWidth;
  initSnow();
};
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
    ylim = Math.sqrt(radius * radius - globex * globex);
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
    if (data[(this.globex + town.width * i) * 4 + 3] > 10) {
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
Flake.prototype.render = function () {
  if (this.finalY > this.globey) {
    this.globey += this.speedY;
  }
  glctx2.beginPath();
  glctx2.arc(this.globex, this.globey, this.r, Math.PI * 2, false);
  glctx2.fill();
};

function render(a) {
  requestAnimationFrame(render);
  glctx2.clearRect(0, 0, snowflake.width, snowflake.height);
  for (var i = 0; i < amount; i++) {
    globeFlakes[i].render();
  }
}

function shakeGlobe() {
  window.removeEventListener("click", shakeGlobe);
  window.removeEventListener("touchstart", shakeGlobe);
  $(".globe-wrapper, .globe-txt").on("click", function () {
    var globe = document.getElementById("globe");
    TweenMax.to(snowflake, 0.5, {
      opacity: 0,
    });
    TweenMax.to(globe, 0.1, {
      rotationZ: 25,
      ease: Quad.easeInOut,
      yoyo: true,
      repeat: 5,
      onComplete: initSnow,
    });
    TweenMax.to(snowflake, 0.5, {
      opacity: 1,
      delay: "0.6",
    });
  });
}
