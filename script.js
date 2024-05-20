const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

const stats = document.querySelector(".stats");
const counters = document.querySelectorAll(".counter");
let bol = false;

const sectionOffset = stats.offsetTop + stats.offsetHeight;

window.addEventListener("scroll", () => {
  const pageOffset = window.innerHeight + pageYOffset;

  if (pageOffset > sectionOffset && bol === false) {
    counters.forEach((counter) => {
      function updateCount() {
        const target = +counter.getAttribute("data-target");
        const speed = +counter.getAttribute("data-speed");
        const count = +counter.innerText;

        if (count < target) {
          counter.innerText = count + 1;
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
      bol = true;
    });
  }
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circleee");

const colors = [
  "#FFFFFF",
  "#FFFFF0",
  "#F5F5DC",
  "#FFFFE0",
  "#FAFAD2",
  "#FFFACD",
  "#EEE8AA",
  "#F0E68C",
  "#90EE90",
  "#F0FFF0",
  "#F5FFFA",
  "#F0FFFF",
  "#F0F8FF",
  "#E6E6FA",
  "#FFF0F5",
  "#FFE4E1",
  "#FFB6C1",
  "#FFC0CB",
  "#F08080",
  "#FFA07A",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
