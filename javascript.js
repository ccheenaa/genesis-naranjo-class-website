
const button = document.querySelector("#button");
const counter = document.querySelector("#counter");

let clicks = 0;

function countClicks() {
    clicks = clicks + 1;

    if (clicks === 1) {
        counter.textContent = "You've clicked 1 time!";
    } else {
        counter.textContent = "You've clicked " + clicks + " times!";
    }
}

button.addEventListener("click", countClicks);