function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show"); 
    } else {
        backToTopButton.classList.remove("show"); 
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth", 
    });
}
