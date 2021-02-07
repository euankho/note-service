var kbtoggle = document.getElementById("kbtoggle");
var kbcontent = document.getElementById("kbcontent");

kbtoggle.addEventListener("click", function () {
    kbcontent.style.display = (kbcontent.dataset.toggled ^= 1) ? "block" : "none";
    kbcontent.innerHTML = marked(kbcontent.innerHTML)
});