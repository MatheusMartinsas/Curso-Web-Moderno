function criarProduto(nome, valor) {
    return {
        nome,
        valor,
        desconto: 0.1
    }

}

console.log(criarProduto('feijão', 10))