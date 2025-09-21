document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".links a");

    links.forEach(link => {
        link.addEventListener("click", function () {
           e.preventDefault(); // impede que redirecione imediatamente
        const spinner = document.getElementById('loading-spinner');
        spinner.style.display = 'block'; // mostra o spinner

        setTimeout(() => {
            window.location.href = this.href; // redireciona depois de um tempo
        }, 1000); // espera 1 segundo (ou o tempo que quiser)
    });
});


window.addEventListener('load', function() {
        // Adiciona uma classe que ativa a animação quando a página está carregada
        const spinner = document.getElementById('loading-spinner');

        //remover o spinner do DOM
        setTimeout(() => {
            spinner.remove();
        }, 1000); // Espera 1 segundo para a animação terminar antes de remover o spinner
    });
});
