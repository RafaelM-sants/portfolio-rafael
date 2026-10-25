tsParticles.load("fundo_particulas", {
    background: {
        color: "transparent"
    },
    particles: {
        number: {
            value: 50
        },
        color: {
            value: "#64ffda"
        },
        move: {
            enable: 0.5,
            speed: 2
        },
        size: {
            value: 3
        },
        links: {
            enable: true,
            color: "#64ffda",
            distance: 100
        }
    }
});


const botao = document.getElementById("btn-tema-roxo");

botao.addEventListener("click", function() {
    document.body.classList.toggle("tema-roxo");
});


