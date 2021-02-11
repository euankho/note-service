var kbtoggle = document.getElementById("kbtoggle");
var kbcontent = document.getElementById("kbcontent");

$(document).ready(function () {
    if ($(".navbar-burger")) {
        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function () {

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");

        });
    }
});
if (kbtoggle) {
    //kbcontent.innerHTML = marked(kbcontent.innerHTML)
    kbtoggle.addEventListener("click", function () {
        kbcontent.style.display = (kbcontent.dataset.toggled ^= 1) ? "block" : "none";
    });
}

function openwindow() {
    window.open(window.location.href + ".pdf")
}