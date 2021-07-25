let form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Adicionar o client a tabela
    const nome = document.getElementById('nome').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const estado = document.getElementById('estado').value
    const cidade = document.getElementById('cidade').value
    const cep = document.getElementById('cep').value
    const bairro = document.getElementById('bairro').value
    const rua = document.getElementById('rua').value
    const numero = document.getElementById('numero').value


    const dados = {
        nome,
        cpf,
        email,
        telefone,
        estado,
        cidade,
        cep,
        bairro,
        rua,
        numero 
    }

    //Validando CPF e Telefone

    if(dados.cpf.length !== 11) {
        window.alert('CPF inválido, por favor, digite novamente.')
    } else if(dados.telefone.length !== 11) {
        window.alert('Número de telefone inválido, por favor, digite novamente.')
    } else if(dados.cep.length !==8){
        window.alert('CEP inválido, por favor, digite novamente.')
    } else{

        let valoresDados = Object.values(dados)

        let tbody = document.getElementById('tabela-clientes')
        let tr = document.createElement('tr')
        tbody.append(tr)

        valoresDados.forEach(valor => {
            let td = document.createElement('td')
            tr.append(td)
            td.append(valor)
        })

        // Adicionando o cliente no Local Storage

        let clientes = JSON.parse(localStorage.getItem('cliente')) ?? []
        clientes.push(dados)
        let clientesConvertidos = JSON.stringify(clientes)
        localStorage.setItem('cliente', clientesConvertidos)
    }
})