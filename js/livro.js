async function enviaFormulario() {
    // recuperar as informações do formulário e colocar em objeto JSON
    const livroDTO = {
        "titulo": document.querySelectorAll("input")[0].value,
        "autor": document.querySelectorAll("input")[1].value,
        "editora": document.querySelectorAll("input")[2].value,
        "anoPublicacao": Number (document.querySelectorAll("input")[3].value),
        "isbn": Number (document.querySelectorAll("input")[4].value),
        "quantTotal": Number (document.querySelectorAll("input")[5].value),
        "quantDisponivel": Number (document.querySelectorAll("input")[6].value),
        "valorAquisicao": Number(document.querySelectorAll("input")[7].value),
        "statusLivroEmprestado": document.querySelectorAll("input")[8].value
    }
}

async function recuperaListaLivros() {
    try {
        // faz a requisição no servidor e armazena a resposta
        const respostaServidor = await fetch('http://localhost:3333/lista/livros');

        // verifica se a reposta foi bem sucedida (true)
        if(respostaServidor.ok) {
            // armazenar a lista de alunos
            const listaLivros = await respostaServidor.json();
            // chama a função de criar tabela passando a lista como parâmetro
            criarTabelaLivros(listaLivros);
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

function criarTabelaLivros(livros) {
    try {
        // recuperar o elemento tbody
        const tBody = document.querySelector(`tbody`);

        // percorro o array de clientes
        livros.map(livro => {
            // criar a estrutura da tabela
            // cria o tr (table row)
            const tr = document.createElement('tr');

            const tdIdLivro = document.createElement('td');
            tdIdLivro.textContent = livro.id;
            tr.appendChild(tdIdLivro);

            // cria o td para o nome do cliente
            const tdTitulo = document.createElement('td');
            // insere o nome do cliente
            tdTitulo.textContent = livro.titulo;
            // insiro tdNomeCliente como filho de tr
            tr.appendChild(tdTitulo);

            // cria o td para o CPF do cliente
            const tdAutor = document.createElement('td');
            // insere o cpf do cliente
            tdAutor.textContent = livro.autor;
            // insere tdCpfCliente como filho de tr
            tr.appendChild(tdAutor);

            // cria o td para o email do cliente
            const tdEditora = document.createElement('td');
            // insere o email do cliente
            tdEditora.textContent = livro.editora;
            // insere tdEmail como filho de tr
            tr.appendChild(tdEditora);

            // cria o td para o email do cliente
            const tdAnoPublicacao = document.createElement('td');
            // insere o email do cliente
            tdAnoPublicacao.textContent = livro.anoPublicacao;
            // insere tdEmail como filho de tr
            tr.appendChild(tdAnoPublicacao);

            // cria o td para o email do cliente
            const tdIsbn = document.createElement('td');
            // insere o email do cliente
            tdIsbn.textContent = livro.isbn;
            // insere tdEmail como filho de tr
            tr.appendChild(tdIsbn);

            // cria o td para o email do cliente
            const tdQuantTotal = document.createElement('td');
            // insere o email do cliente
            tdQuantTotal.textContent = livro.quantTotal;
            // insere tdEmail como filho de tr
            tr.appendChild(tdQuantTotal);

            // cria o td para o email do cliente
            const tdQuantDisp = document.createElement('td');
            // insere o email do cliente
            tdQuantDisp.textContent = livro.quantDisponivel;
            // insere tdEmail como filho de tr
            tr.appendChild(tdQuantDisp);

            // cria o td para o email do cliente
            const tdValorAquisicao = document.createElement('td');
            // insere o email do cliente
            tdValorAquisicao.textContent = livro.valorAquisicao;
            // insere tdEmail como filho de tr
            tr.appendChild(tdValorAquisicao);

            // cria o td para o email do cliente
            const tdStatus = document.createElement('td');
            // insere o email do cliente
            tdStatus.textContent = livro.status;
            // insere tdEmail como filho de tr
            tr.appendChild(tdStatus);

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