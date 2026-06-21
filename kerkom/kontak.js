const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(e){

    e.preventDefault();

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);

    form.reset();
});