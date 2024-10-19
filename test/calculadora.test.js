// Fazer um teste não implica que o código está funcionando,
// mas sim que uma ação esperada foi feita com sucesso ou se falhou;

const calculadora = require("../models/calculadora.js");

test("qual o valor deveria dar?", () => {
  const resultado = calculadora.somar(5, 5);
  expect(resultado).toBe(10);
  console.log(resultado);
});

test("qual o valor deveria dar?", () => {
  const resultado = calculadora.somar(5, 5);
  expect(resultado).toBe(10);
  console.log(resultado);
});

// Teste da função subtrair
test("Deve subtrair dois números corretamente", () => {
  const resultado = calculadora.subtrair(10, 5);
  expect(resultado).toBe(5);
  console.log(resultado);
});

test("Deve retornar uma mensagem de erro se um dos argumentos não for um número - subtração", () => {
  const resultado = calculadora.subtrair(10, "a");
  expect(resultado).toBe("Um dos argumentos não é um número!");
  console.log(resultado);
});

// Teste da função multiplicar
test("Deve multiplicar dois números corretamente", () => {
  const resultado = calculadora.multiplicar(5, 3);
  expect(resultado).toBe(15);
  console.log(resultado);
});

test("Deve retornar uma mensagem de erro se um dos argumentos não for um número - multiplicação", () => {
  const resultado = calculadora.multiplicar(5, "b");
  expect(resultado).toBe("Um dos argumentos não é um número!");
  console.log(resultado);
});

// Teste da função dividir
test("Deve dividir dois números corretamente", () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
  console.log(resultado);
});

test("Deve retornar uma mensagem de erro ao tentar dividir por zero", () => {
  const resultado = calculadora.dividir(10, 0);
  expect(resultado).toBe("Não é possível dividir por zero!");
  console.log(resultado);
});

test("Deve retornar uma mensagem de erro se um dos argumentos não for um número - divisão", () => {
  const resultado = calculadora.dividir(10, "c");
  expect(resultado).toBe("Um dos argumentos não é um número!");
  console.log(resultado);
});
