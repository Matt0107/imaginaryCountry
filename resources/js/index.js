function navFunction() {
    const x = document.querySelector(".dropdown-content");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}