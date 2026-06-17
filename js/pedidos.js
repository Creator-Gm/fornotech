const btnVoltar = document.getElementById("btnVoltar");
const btnFinalizar = document.getElementById("btnFinalizar");
const btnfinal = document.getElementById("btnfinal");

btnVoltar.addEventListener("click", () => {
    window.location.href = "index.html";
});

btnFinalizar.addEventListener("click", () => {
    window.location.href = "montagem.html";
});

btnfinal.addEventListener("click", () => {
    window.location.href = "";
});