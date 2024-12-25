// -- task 1 -- //
const text = document.querySelector("#text");
text.nextElementSibling.textContent = text.textContent;

// -- task 2 -- //
const image = document.querySelector(".image");
image.src = "./images/T34.jpg";

// -- task 3 -- //
const link = document.querySelector(".link");
link.href = "https://en.wikipedia.org/wiki/Kliment_Voroshilov_tank#Models";
const image2 = document.querySelector(".image2");
image2.alt = "tank2";

// -- task 4 -- //
const list = document.querySelector(".list");
const firstLink = list.firstElementChild;
firstLink.textContent = "Another pizza";
