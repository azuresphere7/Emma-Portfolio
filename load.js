let body = document.getElementsByTagName("body")[0];
body.style.overflow = "hidden";

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        body.style.overflow = "auto"
    }, 200);
});