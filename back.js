var numeroSecreto = parseInt(Math.random() * 10)

function Chutar() {
  var elementoResultado = document.getElementById('resultado')
  var chute = parseInt(document.getElementById('valor').value)
  console.log(chute)
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Você acertou'
    console.log('acertou')
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Você deve digitar um número de 0 a 10'
  } else {
    elementoResultado.innerHTML = 'errou, o número secreto era ' + numeroSecreto
  }
}
