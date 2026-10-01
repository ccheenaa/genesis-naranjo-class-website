const button = document.querySelector("#button");

function changeButton() {
    button.style.backgroundColor = "pink";
}

button.addEventListener("click", changeButton);

const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "Why did you click the button?";
}

button.addEventListener("click", changeMessage);