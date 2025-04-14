function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos

    let section = document.getElementById('resultados-pesquisa');
    let section2 = document.getElementById('resultados-pesquisa2');

    // Obtém o valor digitado no campo de pesquisa e o converte para letras minúsculas

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Se estiver vazio, exibe uma mensagem de erro
        section.innerHTML = "Tente novamente";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nada = "";

    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        // Converte os dados para letras minúsculas para facilitar a comparação

        let nome = dado.nome.toLocaleLowerCase();

        let descricao = dado.descricao.toLocaleLowerCase();

        let tags = dado.tags.toLocaleLowerCase();

        // Verifica se o termo pesquisado está presente no título, posição ou tags
        if (nome.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // Se encontrar um resultado, adiciona um novo elemento HTML com as informações do atleta aos resultados
            resultados += `
            <div class="item-resultado">
              <h2>
                <p>${dado.nome}</p>
              </h2>
              <p class="descricao-meta">
                ${dado.descricao}
              </p>
            </div>
          `;
        }
    }
    // Verifica se foram encontrados resultados
    if (!resultados) {
        // Se não encontrou resultados, exibe uma mensagem informando
        resultados = "Nada foi encontrado";
    }

    // Atualiza o conteúdo da seção de resultados com os resultados encontrados
    section.innerHTML = resultados;
    section2.innerHTML = nada;
}