// Função para iniciar o contador em h1
function iniciarContador1() {
  var contadorElement = document.getElementById("contador1");
  var contador = 0;

  // Definindo a função de incremento
  function incrementar() {
    contadorElement.textContent = contador;
    contador++;

    // Se contador for menor que 700, continue incrementando
    if (contador <= 10) {
      setTimeout(incrementar, 10); // Defina o intervalo de atualização aqui
    }
  }

  // Iniciar o incremento
  incrementar();
}

// Função para iniciar o contador em h2
function iniciarContador2() {
  var contadorElement = document.getElementById("contador2");
  var contador = 0;

  // Definindo a função de incremento
  function incrementar() {
    contadorElement.textContent = contador;
    contador++;

    // Se contador for menor que 700, continue incrementando
    if (contador <= 8) {
      setTimeout(incrementar, 10); // Defina o intervalo de atualização aqui
    }
  }

  // Iniciar o incremento
  incrementar();
}

// Função para iniciar o contador em h2
function iniciarContador3() {
  var contadorElement = document.getElementById("contador3");
  var contador3 = 0;

  // Definindo a função de incremento
  function incrementar() {
    contadorElement.textContent = contador3;
    contador3++;

    // Se contador for menor que 700, continue incrementando
    if (contador3 <= 700) {
      setTimeout(incrementar, 8); // Defina o intervalo de atualização aqui
    }
  }

  // Iniciar o incremento
  incrementar();
}

// Função para iniciar o contador em h2
function iniciarContador4() {
  var contadorElement = document.getElementById("contador4");
  var contador4 = 0;

  // Definindo a função de incremento
  function incrementar() {
    contadorElement.textContent = contador4;
    contador4++;

    // Se contador for menor que 700, continue incrementando
    if (contador4 <= 90) {
      setTimeout(incrementar, 8); // Defina o intervalo de atualização aqui
    }
  }

  // Iniciar o incremento
  incrementar();
}

// Iniciar os contadores quando a página estiver carregada
window.onload = function () {
  iniciarContador1();
  iniciarContador2();
  iniciarContador3();
  iniciarContador4();
};
