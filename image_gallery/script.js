document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            alert("You clicked on " + img.alt);
        });
    });
});