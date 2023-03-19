const alunos = [];
for (let i = 0; i < 3; i++) {
  alunos[i] = new Array(5);
}

for (let i = 0; i < alunos.length; i++) {
  const nome = prompt(`Digite o nome do ${i + 1}º aluno: `);
  alunos[i][0] = nome;

  let notas = 0;
  for (let n = 1; n <= 4; n++) {
    const nota = Number(prompt(`Digite a ${n}ª nota de ${nome}:`));
    alunos[i][n] = nota;
    notas += nota;
  }

  const media = notas / 4;
  alunos[i][5] = media.toFixed(2);
}

for (let i = 0; i < alunos.length; i++) {
  const nome = alunos[i][0];
  const media = alunos[i][5];
  alert(`${nome}: ${media}`);
}

let maiorMedia = -Infinity;
let menorMedia = Infinity;
let alunoMaiorMedia, alunoMenorMedia;
for (let i = 0; i < alunos.length; i++) {
  const media = alunos[i][5];
  if (media > maiorMedia) {
    maiorMedia = media;
    alunoMaiorMedia = alunos[i][0];
  }
  if (media < menorMedia) {
    menorMedia = media;
    alunoMenorMedia = alunos[i][0];
  }
}

alert(
  `Aluno com a maior média: ${alunoMaiorMedia} - ${maiorMedia}\nAluno com a menor média: ${alunoMenorMedia} - ${menorMedia}`
);
