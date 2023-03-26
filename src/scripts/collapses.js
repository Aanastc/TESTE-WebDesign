document.querySelectorAll("#btn-sidebar").forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault(); // evitar que o link seja seguido
    var url = menu.dataset.file; // URL da página que deve ser carregada
    var conteudo = document.getElementById("conteudo"); // elemento onde o conteúdo deve ser exibido
    // conteudo.innerHTML = "Carregando..."; // mensagem de carregamento enquanto o conteúdo é carregado
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.text();
      })
      .then((data) => (conteudo.innerHTML = data))
      .then(() => (conteudo.innerHTML = "Essa página ainda não existe 😦"));
  });
});
