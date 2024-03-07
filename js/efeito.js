// Função para iniciar os contadores
function iniciarContadores() {
  // Contador 1 (até 10)
  iniciarContador(10, "contador1", 100);
  // Contador 2 (até 8)
  iniciarContador(8, "contador2", 150);
  // Contador 3 (até 700)
  iniciarContador(700, "contador3", 20);
  // Contador 4 (até 90)
  iniciarContador(90, "contador4", 80);
}

// Função para iniciar um contador específico
function iniciarContador(limite, id, intervalo) {
  var contadorElement = document.getElementById(id);
  var contador = 0;

  // Definindo a função de incremento
  function incrementar() {
    contadorElement.textContent = contador;
    contador++;

    // Se contador atingir o limite, reiniciar após 2 segundos
    if (contador > limite) {
      contador = 0;
      setTimeout(incrementar, 4000); // Esperar 2 segundos antes de reiniciar
    } else {
      setTimeout(incrementar, intervalo); // Definir o intervalo de atualização aqui
    }
  }

  // Iniciar o incremento
  incrementar();
}

// Iniciar os contadores quando a página estiver carregada
window.onload = function () {
  iniciarContadores();
};
