async function enviaFormulario() {
    const alunoDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "sobrenome": document.querySelectorAll("input")[1].value,
        "dataNascimento": Date (document.querySelectorAll("input")[2].value),
        "endereco": document.querySelectorAll("input")[3].value,
        "email": document.querySelectorAll("input")[4].value,
        "celular": Number (document.querySelectorAll("input")[5].value)
    }
}

    async function recuperaListaAlunos() {
        try {
            // faz a requisição no servidor e armazena a resposta
            const respostaServidor = await fetch('http://localhost:3333/lista/alunos');
    
            // verifica se a reposta foi bem sucedida (true)
            if(respostaServidor.ok) {
                // armazenar a lista de alunos
                const listaDeAlunos = await respostaServidor.json();
                // chama a função de criar tabela passando a lista como parâmetro
                criarTabelaAlunos(listaDeAlunos);
            }
    
            // se a reposta for false, retorna um valor nulo
            return null;
        } catch (error) {
            // em caso de erro, lança o erro no console
            console.error(error);
            // retorna um valor nulo
            return null;
        }
    }
    
    function criarTabelaAlunos(alunos) {
        try {
            // recuperar o elemento tbody
            const tBody = document.querySelector(`tbody`);
    
            // percorro o array de clientes
            alunos.map(aluno => {
                // criar a estrutura da tabela
                // cria o tr (table row)
                const tr = document.createElement('tr');
                const tdIdAluno = document.createElement('td');
                tdIdAluno.textContent = aluno.id;
                tr.appendChild(tdIdAluno);
    
                // cria o td para o nome do cliente
                const tdRaAluno = document.createElement('td');
                // insere o nome do cliente
                tdIdAluno.textContent = aluno.ra;
                // insiro tdNomeCliente como filho de tr
                tr.appendChild(tdRaAluno);
    
                // cria o td para o CPF do cliente
                const tdNomeAluno = document.createElement('td');
                // insere o cpf do cliente
                tdNomeAluno.textContent = aluno.nome;
                // insere tdCpfCliente como filho de tr
                tr.appendChild(tdNomeAluno);
    
                // cria o td para o email do cliente
                const tdSobrenome = document.createElement('td');
                // insere o email do cliente
                tdSobrenome.textContent = aluno.sobrenome;
                // insere tdEmail como filho de tr
                tr.appendChild(tdSobrenome);

                // cria o td para o email do cliente
                const tdDataNascimento = document.createElement('td');
                // insere o email do cliente
                tdDataNascimento.textContent = aluno.dataNascimento;
                // insere tdEmail como filho de tr
                tr.appendChild(tdDataNascimento);

                // cria o td para o email do cliente
                const tdEndereco = document.createElement('td');
                // insere o email do cliente
                tdEndereco.textContent = aluno.endereco;
                // insere tdEmail como filho de tr
                tr.appendChild(tdEndereco);

                // cria o td para o email do cliente
                const tdEmail = document.createElement('td');
                // insere o email do cliente
                tdEmail.textContent = aluno.email;
                // insere tdEmail como filho de tr
                tr.appendChild(tdEmail);

                // cria o td para o email do cliente
                const tdCelular = document.createElement('td');
                // insere o email do cliente
                tdCelular.textContent = aluno.celular;
                // insere tdEmail como filho de tr
                tr.appendChild(tdCelular);
    
                // cria o td para as ações
                const tdAcoes = document.createElement('td');
                // cria a imagem de editar
                const imgEditar = document.createElement('img');
                // insere o caminho da imagem
                imgEditar.src = './assets/icons/pencil-square.svg';
                // insere o texto alternativo
                imgEditar.alt = 'Editar';
                // insere a imagem como filho de tdAcoes
                tdAcoes.appendChild(imgEditar);
    
                // cria a imagem de deletar
                const imgDeletar = document.createElement('img');
                // insere o caminho da imagem
                imgDeletar.src = './assets/icons/trash-fill.svg';
                // insere o texto alternativo
                imgDeletar.alt = 'Deletar';
                // insere a imagem como filho de tdAcoes
                tdAcoes.appendChild(imgDeletar);
    
                // insere tdAcoes como filho de tr
                tr.appendChild(tdAcoes);
    
                // insere tr como filho de tBody
                tBody.appendChild(tr);
            });
        } catch (error) {
            // em caso de erro, imprime no console
            console.error(error);
            // retorna um valor nulo
            return null;
        }
    }