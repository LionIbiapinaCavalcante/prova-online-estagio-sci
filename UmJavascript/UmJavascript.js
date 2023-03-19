function verificar() {
  const numeros = [];
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const num3 = document.getElementById("num3").value;
  const num4 = document.getElementById("num4").value;
  const num5 = document.getElementById("num5").value;

  if (num1 == "" || num1 == NaN) {
    alert("1º número não informado ou o valor digitado não é válido");
    num1.focus();
    return;
  }
  if (num2 == "" || num3 == NaN) {
    alert("2º número não informado ou o valor digitado não é válido");
    num2.focus();
    return;
  }
  if (num3 == "" || num3 == NaN) {
    alert("3º número não informado ou o valor digitado não é válido");
    num3.focus();
    return;
  }
  if (num4 == "" || num4 == NaN) {
    alert("4º número não informado ou o valor digitado não é válido");
    num4.focus();
    return;
  }
  if (num5 == "" || num5 == NaN) {
    alert("5º número não informado ou o valor digitado não é válido");
    num5.focus();
    return;
  }

  const numero1 = parseInt(num1);
  const numero3 = parseInt(num3);
  const numero4 = parseInt(num4);
  const numero5 = parseInt(num5);
  const numero2 = parseInt(num2);

  numeros.push(numero1, numero2, numero3, numero4, numero5);

  const pares = [];
  const impares = [];
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    } else {
      impares.push(numeros[i]);
    }
  }

  const media =
    (numero1 + numero2 + numero3 + numero4 + numero5) / numeros.length;

  document.getElementById("numerosPares").innerText = `Números pares: ${pares}`;
  document.getElementById(
    "numerosImpares"
  ).innerText = `Números ímpares: ${impares}`;
  document.getElementById("mediaGeral").innerText = `Média geral: ${media}`;
}
