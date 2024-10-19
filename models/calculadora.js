function somar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Um dos argumentos não é um número!";
  } else {
    return num1 + num2;
  }
}

function subtrair(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Um dos argumentos não é um número!";
  } else {
    return num1 - num2;
  }
}
function multiplicar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Um dos argumentos não é um número!";
  } else {
    return num1 * num2;
  }
}
function dividir(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Um dos argumentos não é um número!";
  } else {
    if (num2 === 0) {
      return "Não é possível dividir por zero!";
    } else {
      return num1 / num2;
    }
  }
}

exports.somar = somar;
exports.dividir = dividir;
exports.multiplicar = multiplicar;
exports.subtrair = subtrair;
