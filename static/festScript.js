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

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];
const weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
var element = document.querySelector(".box .date");
var date = element.innerHTML;
let parsedDate = new Date(date)
let day = weekDays[parsedDate.getDay()]
let monthDay = parsedDate.getDate();
let month = months[parsedDate.getMonth()];
let year = parsedDate.getFullYear();
element.innerText = `Le ${day} ${monthDay} ${month} ${year}`;










(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    eventDay = date;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > eventDay) {

  }
  //end

  const countDown = new Date(eventDay).getTime(),
    x = setInterval(function() {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerText = 0,
          document.getElementById("hours").innerText = 0,
          document.getElementById("minutes").innerText = 0,
          document.getElementById("seconds").innerText = 0;
        document.getElementsById("headline") = "guichet fermé";
      }
      //seconds
    }, 0)
}());


function dropDown() {
  const l = document.querySelector(".prices-list");
  const icon = document.querySelector(".fa-chevron-circle-down");
  if (l.style.display == "block") {
    l.style.display = "none";
  }
  else {
    l.style.display = "block";
  }
}



// le choix d'un pass
let prices = document.querySelectorAll(".prices-list li span");
prices[1].innerHTML = `${Math.ceil(prices[0].innerHTML.replace("DH", "")
  * 1.5)} DH`;
prices[2].innerHTML =
  `${prices[0].innerHTML.replace("DH", "") * 3} DH`;

let pricesList = document.querySelectorAll(".prices-list li");

pricesList.forEach((item) => {
  item.addEventListener("click", () => {
    const choice = document.querySelector(".prices");
    const icon = document.querySelector(".fa-chevron-circle-down");
    choice.innerHTML = item.innerText + icon.outerHTML;
    document.querySelector(".prices-list").style.display = "none";
  });
});

