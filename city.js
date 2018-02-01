let city = {
  name: "Copenhagen",
  population: 1000000,
  weather: "bad",
  districts: ["Nørrebro", "Vesterbro", "Østerbro"],
  founded: {
    by: "Absalon",
    when: 1200
  }
}

//1 grab the template
const template = document.querySelector("#cityTemplate").content;
//2 clone it
const clone = template.cloneNode(true);
//3 change content

clone.querySelector("h1").textContent=city.name;
clone.querySelector(".population").textContent=city.population;

clone.querySelector("span").textContent=city.founded.by;
clone.querySelector("span:nth-child(2)").textContent=city.founded.when;

//4 add to DOM
let parentElement = document.querySelector("#cityList");
parentElement.appendChild(clone);









