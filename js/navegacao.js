const projeto = document.querySelector("#link-projetos");
const home = document.querySelector("#link-home");
const contato = document.querySelector("#link-contato");
const secaoProjetos = document.querySelector("#secao-projetos");
const secaoSobre = document.querySelector("#secao-sobre");
const secaoContato = document.querySelector("#secao-contato");
const paginas = document.querySelectorAll(".pagina");

projeto.addEventListener("click", function() {

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });
    secaoProjetos.classList.add("ativa");
});

home.addEventListener("click", function() {

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });
    secaoSobre.classList.add("ativa");
});

contato.addEventListener("click", function() {

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });
    secaoContato.classList.add("ativa");
});