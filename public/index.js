var kbtoggle = document.getElementById("kbtoggle");
var kbcontent = document.getElementById("kbcontent");

$(document).ready(function () {
    if ($(".navbar-burger")) {
        $(".navbar-burger").click(function () {
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        });
    } 
    if ($("#navtoggle")) {
        $("#navtoggle").click(function () {
            $("#navtoggle").toggleClass("is-active");
            $(".sidenav").toggleClass("is-active");
            $(".container").toggleClass("is-active");
        });
    }
});
if (kbtoggle) {
    kbtoggle.addEventListener("click", function () {
        kbcontent.style.display = (kbcontent.dataset.toggled ^= 1) ? "block" : "none";
    });
}

function openwindow() {
    window.open(window.location.href + ".pdf")
}