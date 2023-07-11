function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } else {
        x.className = "rc_nav";
    }
}

let cancel = document.querySelector(".can")
let modal = document.querySelector(".modal")

cancel.addEventListener("click", () => {
    modal.classList.toggle("clear")
})