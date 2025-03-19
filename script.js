function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    let button = document.getElementById("noButton");
    let maxWidth = window.innerWidth - button.clientWidth;
    let maxHeight = window.innerHeight - button.clientHeight;

    let newX = Math.floor(Math.random() * maxWidth);
    let newY = Math.floor(Math.random() * maxHeight);

    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
