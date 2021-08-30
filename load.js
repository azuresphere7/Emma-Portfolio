window.addEventListener('load', () => {
    let body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        body.style.overflow = "auto"
        console.log("done")
    }, 200);
});