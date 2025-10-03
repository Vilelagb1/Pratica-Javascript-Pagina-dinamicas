const inputItem = document.getElementById("input-item")

const botaoAdicionar = document.getElementById("adicionar-item")

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputItem === "") {
        alert("Por favor, insira um item!")
        return
    }
})