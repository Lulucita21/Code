// Write our Java Script in here

var pics = [
    "imgs/cat.jpg",
    "imgs/cat1.jpg",
    "imgs/cat2.jpg",
    "imgs/cat3.jpg",
    "imgs/cat4.jpg",
    "imgs/cat5.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function () {
    if (counter === 5) {
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
});