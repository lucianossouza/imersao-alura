function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e converte para minúsculas para comparação case-insensitive
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o usuário inseriu algum termo de pesquisa
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum resultado encontrado. Tente usar palavras-chave diferentes, como 'Raposa', 'Urso', 'mamífero' ou 'roedores'.</p>"
    return // Interrompe a função se não houver termo de pesquisa
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado, formatando o título, descrição e link
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <img src="assets/img/${dado.imagem}" alt="Imagem de ${dado.titulo}">
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
   `;
    }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui o HTML construído à seção de resultados
  section.innerHTML = resultados;
}
