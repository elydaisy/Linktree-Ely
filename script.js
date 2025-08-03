document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".links a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            alert("Você será redirecionado para " + this.href);
        });
    });
});

