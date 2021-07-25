let form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    //Adicionar produto na tabela
    const categoria = document.getElementById('categoria').value
    const nome = document.getElementById('nome').value
    const marca = document.getElementById('marca').value
    const quantidade = document.getElementById('quantidade').value
    const preco_compra = document.getElementById('preco-compra').value
    const preco_venda = document.getElementById('preco-venda').value

    const dados = {
        categoria,
        nome,
        marca,
        quantidade,
        preco_compra,
        preco_venda
    }

    let valoresDados = Object.values(dados)

    let tbody = document.getElementById('tabela-produtos')
    let tr = document.createElement('tr')
    tbody.append(tr)

    valoresDados.forEach(valor => {
        let td = document.createElement('td')
        tr.append(td)
        td.append(valor)
    })

    //Adicionar no localStorage
    let produtos = JSON.parse(localStorage.getItem('produto')) ?? []
    produtos.push(dados)
    let produtosConvertidos = JSON.stringify(produtos)
    localStorage.setItem('produto', produtosConvertidos)
})