function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("primaryNav").classList.toggle("open");

}

var x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu


// function toggleMenu() {
//     document.getElementById("primaryNav").classList.toggle("hide");
// }