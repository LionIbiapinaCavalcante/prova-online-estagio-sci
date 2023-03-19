let continuar = true;

while (continuar) {
  let aluno = prompt("Digite o nome do aluno: ");
  let nota1 = parseFloat(prompt("Digite a primeira nota: "));
  let nota2 = parseFloat(prompt("Digite a segunda nota: "));
  let nota3 = parseFloat(prompt("Digite a terceira nota: "));
  let nota4 = parseFloat(prompt("Digite a quarta nota: "));

  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  alert(`Aluno: ${aluno}\nMédia: ${media.toFixed(2)}`);

  if (media < 6) {
    alert("Reprovado");
  } else {
    alert("Aprovado");
  }

  continuar = confirm("Deseja continuar calculando as notas?");
}
