async function enviaFormulario() {
    // recuperar as informações do formulário e colocar em objeto JSON
    const livroDTO = {
        "titulo": document.querySelectorAll("input")[0].value,
        "autor": document.querySelectorAll("input")[1].value,
        "editora": document.querySelectorAll("input")[2].value,
        "ano_publicacao": document.querySelectorAll("input")[3].value,
        "quant_total": Number (document.querySelectorAll("input")[4].value),
        "quant_disponivel": Number (document.querySelectorAll("input")[5].value),
        "valor_aquisicao": Number(document.querySelectorAll("input")[6].value),
        "status": document.querySelectorAll("input")[7].value
    }

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/livro", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livroDTO)
        });
    
        if(!respostaServidor.ok) {
            throw new Error("Erro ao enviar os dados para o servidor. Contate o administrador do sistema");
        }
    
        alert("Livro cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor. ${error}`);
    }
}