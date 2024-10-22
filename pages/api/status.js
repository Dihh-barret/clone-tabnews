function status(request, response) {
  response.status(200).json({ chave: "Valor da chave 'chave'. " });
}

export default status;
