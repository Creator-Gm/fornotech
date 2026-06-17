
// Slots amarelos
var a1 = "";
var a2 = "";
var a3 = "";

// Carrinho 1
var c1a = "";
var c1b = "";
var c1c = "";

// Carrinho 2
var c2a = "";
var c2b = "";
var c2c = "";

// Carrinho 3
var c3a = "";
var c3b = "";
var c3c = "";

// Adiciona ingrediente
function addIngredient(ingrediente) {
  if (a1 == "") {
    a1 = ingrediente;
    document.getElementById("build0").innerHTML = "<strong>" + a1 + "</strong>";
    return;
  }
  if (a2 == "") {
    a2 = ingrediente;
    document.getElementById("build1").innerHTML = "<strong>" + a2 + "</strong>";
    return;
  }
  if (a3 == "") {
    a3 = ingrediente;
    document.getElementById("build2").innerHTML = "<strong>" + a3 + "</strong>";
    return;
  }
  alert("Todos os 3 slots já estão preenchidos!");
}

// Remove do slot amarelo
function removeFromBuild(numero) {
  if (numero == 0) {
    a1 = "";
    document.getElementById("build0").innerHTML = "";
  }
  if (numero == 1) {
    a2 = "";
    document.getElementById("build1").innerHTML = "";
  }
  if (numero == 2) {
    a3 = "";
    document.getElementById("build2").innerHTML = "";
  }
}

// Remove do carrinho
function removeFromCart(numero) {
  if (numero == 0) {
    c1a = "";
    c1b = "";
    c1c = "";
    document.getElementById("cart0").innerHTML = "";
  }
  if (numero == 1) {
    c2a = "";
    c2b = "";
    c2c = "";
    document.getElementById("cart1").innerHTML = "";
  }
  if (numero == 2) {
    c3a = "";
    c3b = "";
    c3c = "";
    document.getElementById("cart2").innerHTML = "";
  }
}

// Adiciona esfiha no carrinho
function addToCart() {
  if (a1 == "" || a2 == "" || a3 == "") {
    alert("Monte sua esfiha completamente! Preencha os 3 slots.");
    return;
  }

  if (c1a == "") {
    c1a = a1;
    c1b = a2;
    c1c = a3;
    document.getElementById("cart0").innerHTML = "Esfiha<br>" + c1a + "<br>" + c1b + "<br>" + c1c;
    a1 = "";
    a2 = "";
    a3 = "";
    document.getElementById("build0").innerHTML = "";
    document.getElementById("build1").innerHTML = "";
    document.getElementById("build2").innerHTML = "";
    return;
  }

  if (c2a == "") {
    c2a = a1;
    c2b = a2;
    c2c = a3;
    document.getElementById("cart1").innerHTML = "Esfiha<br>" + c2a + "<br>" + c2b + "<br>" + c2c;
    a1 = "";
    a2 = "";
    a3 = "";
    document.getElementById("build0").innerHTML = "";
    document.getElementById("build1").innerHTML = "";
    document.getElementById("build2").innerHTML = "";
    return;
  }

  if (c3a == "") {
    c3a = a1;
    c3b = a2;
    c3c = a3;
    document.getElementById("cart2").innerHTML = "Esfiha<br>" + c3a + "<br>" + c3b + "<br>" + c3c;
    a1 = "";
    a2 = "";
    a3 = "";
    document.getElementById("build0").innerHTML = "";
    document.getElementById("build1").innerHTML = "";
    document.getElementById("build2").innerHTML = "";
    return;
  }

  alert("Carrinho cheio! (máximo 3 itens)");
}
const btnvoltar2 = document.getElementById("btnvoltar2");
btnvoltar2.addEventListener("click", () => {
    window.location.href = "pedidos.html";
});


function cancelar() {
  if (confirm("Deseja cancelar? O carrinho e a montagem serão limpos.")) {
    c1a = "";
    c1b = "";
    c1c = "";
    c2a = "";
    c2b = "";
    c2c = "";
    c3a = "";
    c3b = "";
    c3c = "";
    a1 = "";
    a2 = "";
    a3 = "";

    document.getElementById("cart0").innerHTML = "";
    document.getElementById("cart1").innerHTML = "";
    document.getElementById("cart2").innerHTML = "";
    document.getElementById("build0").innerHTML = "";
    document.getElementById("build1").innerHTML = "";
    document.getElementById("build2").innerHTML = "";
  }
}

// Botão Finalizar
function finalizar() {
  if (c1a == "" && c2a == "" && c3a == "") {
    alert("Seu carrinho está vazio! Monte uma esfiha primeiro.");
    return;
  }

  var msg = "🎉 Pedido finalizado com sucesso!\n\n";
  var qtd = 0;

  if (c1a != "") {
    qtd = qtd + 1;
    msg = msg + "• Esfiha (" + c1a + ", " + c1b + ", " + c1c + ")\n";
  }
  if (c2a != "") {
    qtd = qtd + 1;
    msg = msg + "• Esfiha (" + c2a + ", " + c2b + ", " + c2c + ")\n";
  }
  if (c3a != "") {
    qtd = qtd + 1;
    msg = msg + "• Esfiha (" + c3a + ", " + c3b + ", " + c3c + ")\n";
  }

  msg = msg + "\nQuantidade: " + qtd + " esfiha(s)";

  var preco = "";
  if (qtd == 1) preco = "5,90";
  if (qtd == 2) preco = "11,80";
  if (qtd == 3) preco = "17,70";

  msg = msg + "\nTotal: R$ " + preco;

  alert(msg);

  c1a = "";
  c1b = "";
  c1c = "";
  c2a = "";
  c2b = "";
  c2c = "";
  c3a = "";
  c3b = "";
  c3c = "";

  document.getElementById("cart0").innerHTML = "";
  document.getElementById("cart1").innerHTML = "";
  document.getElementById("cart2").innerHTML = "";
}