// montrer ou cacher le menu
function barAnimation() {
  var element1 = document.querySelector("header .navbar");
  var element2 = document.querySelector("#bars i");
  if (element1.style.display == "block") {
    element2.className = "fa fa-bars";
    element1.style.display = "none";
  }
  else {
    element1.style.display = "block";
    element2.className = "fa fa-times";
  }
}


function widthChange() {
  var header = document.querySelector("header .navbar");
  var element = document.querySelector("#bars i");
  if (window.innerWidth > 700) {
    header.style.display = "block";
  }
  else {
    header.style.display = "none";
    element.className = "fa fa-bars";
  }
}
window.addEventListener("resize", widthChange);


// l'animation du slider
var current = 1;
var timer = setTimeout(autoSlide, 3000);
var direction = 1;
function slide(target) {
  var container = document.querySelector(".slider .container");
  var element = document.querySelector(".pointer .selected");
  var n = 100 / 6;
  var m = Number(target.id);
  element.className = "";
  target.className = "selected";
  container.style.transform = "translateX(".concat((1 - m) * n, "%)");
  clearTimeout(timer);
  timer = setTimeout(autoSlide, 3000);
}
var pointers = document.querySelectorAll(".pointer li");
for (var i = 0; i < pointers.length; i++) {
  pointers[i].addEventListener("click", function(event) {
    slide(event.target);
  });
}
function autoSlide() {
  if (current == 4 && direction == 1)
    direction = -1;
  else if (current == 1 && direction == -1)
    direction = 1;
  current += direction;
  var target = document.querySelector("[id='".concat(current, "']"));
  slide(target);
}


//cette partie concerne la recherche des festivaux (statiquement)
const searchInput = document.getElementById('searchInput');

const festivalElements = document.getElementsByClassName('festival');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  for (const festivalElement of festivalElements) {
    const titleElement = festivalElement.querySelector('.title');

    const titleText = titleElement.textContent.toLowerCase();

    if (titleText.includes(searchTerm)) {
      festivalElement.style.display = 'block';
    } else {
      festivalElement.style.display = 'none';
    }
  }
});
