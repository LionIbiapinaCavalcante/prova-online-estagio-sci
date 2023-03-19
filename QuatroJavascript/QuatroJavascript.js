const numeros = new Array(5);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = parseInt(prompt(`Digite o ${i + 1}° número: `));
}

alert(`Valor da posição 3 :  ${numeros[2]}`);
