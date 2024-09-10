function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById ("campoPesquisa").value 

    console.log (campoPesquisa);

    // Se não existe campo pesquisa "Nada foi encotrado"
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você não buscou por um dorama.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
   
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Intera sobre os dados da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Se o titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa))  {
            
            // Cria um  novo elemento
            resultados += `
            <div class="item-resultado">
        <h2>
          <a href="https://www.youtube.com/watch?v=AnjmzZFssmg&t=1s" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p> 
        <a href=${dado.link} target="_blank">Mais Informacoes</a> 
      </div>
    `;  
        }
  }

    // se não existir resultados faça...
     if(!resultados) (
        resultados = "<p>Nada foi encontrado</p>"

     )

  // Atribui os resultados gerados á seção HTML
  section.innerHTML = resultados;

}