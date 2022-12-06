"use strict"
// ---------------------------------------------------------------------------------------------------
// Local para adicionar post
const adicionarPost = document.querySelector('.post-modal')
const paginaAdicionar = document.querySelector('.form-post') 
const botaoAdicionar = document.querySelector('.plus')
const botaoEnviar = document.querySelector('.postar')
const postCompleto = document.querySelector('.secao-posts')
const botaoLogin = document.querySelector('.login')

// ---------------------------------------------------------------------------------------------------
// Local para enviar os posts
let comentario;
var objeto = {comentario:comentario}
// ---------------------------------------------------------------------------------------------------
// Mostrando as consts
// console.log(adicionarPost);
// console.log(paginaAdicionar)
// console.log(botaoAdicionar)
// console.log(botaoEnviar)
// console.log(postCompleto)
console.log(botaoLogin);
// ---------------------------------------------------------------------------------------------------
// Configurando o botão para mostar a parte de criar post
botaoAdicionar.onclick = mostarPost
function mostarPost(){
    console.log("mostrando")
    adicionarPost.style.display = 'flex'
    var comentarioPost = document.querySelector('.comentario-form').value

}
// ---------------------------------------------------------------------------------------------------
// Fazendo a animação apra quando clicar fora sumir a pagina
document.addEventListener('mousedown', (event) => {
  if (paginaAdicionar.contains(event.target)){
    console.log("dentro")
  }else{
    adicionarPost.style.display = 'none'
  }
})
// ---------------------------------------------------------------------------------------------------
// Fazendo a parte para enviar os posts
botaoEnviar.addEventListener("click", addPost)
function addPost(e){
  // confirmação para criar post
    if(confirm("Criar um post?") == true){
      // Sumindo a pagina de criar post ao clicar no botão e confirmar
        adicionarPost.style.display = 'none'

        // Fazendo o caminha para pegar os valores inseridos
        var comentarioPost = document.querySelector('.comentario-form').value
        const imagePost = document.querySelector('#campo-foto').getAttribute("files");

        // Passando os valores
        objeto.comentario = comentarioPost
        objeto.image = imagePost

        // Criando o post ao enviar
        const novoPost = document.createElement("article")
        // Colocando uma classe no posts
        novoPost.className = "post"
        // Html do post 
        novoPost.innerHTML = `
        <div class="post-info">
          <div class="usuario-info">
            <div class="avatar"></div>
            <div class="nome-hora">
              <p class="nome">Anonimo</p>
              <p class="hora">horas atrás</p>
            </div>
          </div>
          <p class="comentario">
            ${objeto.comentario}
          </p>
        </div>
        <img class="post-imagem" src="${objeto.image}" alt="" />
        <div class="post-interacoes">
          <div class="container-like">
            <img class="like-btn" src="like.svg" alt="like" />
            <p class="descricao-like">Curtir</p>
          </div>
          <div class="container-coment">
            <img class="coment-btn" src="comentario.svg" alt="like" />
            <p class="descricao-comentario">Comentários</p>
          </div>
        </div>
        `        
        
        // pegando o caixa que sobrepoe o like inteiro
        const caixaLike = novoPost.querySelector('.container-like')
        // Pegando a escrita like
        const like = novoPost.querySelector('.descricao-like')
        // Pegando a imagem do like
        const likeImage = novoPost.querySelector('.like-btn')

        // Colocando o evento para quando clicar em like mudar sua cor para azul
        caixaLike.addEventListener('click', cor)
        function cor(e) {
          // caso o like for diferente de azul ficar azul caso ao contrario ficar preto
            if (like.style.color != "blue") {
                likeImage.src = "./assets/images/LikeAzuk.png"
                like.innerText = "Desgostar"
                like.style.color = "blue";
            } else {
                like.style.color = "black";
                likeImage.src = "like.svg";
                like.innerText = "Curtir"
            }
        }
        // Impedindo o site de recarregar
        e.preventDefault();
        // Inserindo o post no site
        document.querySelector(".secao-posts").appendChild(novoPost)
        }else{
        adicionarPost.style.display = 'none'
        e.preventDefault();
    }
}
// ---------------------------------------------------------------------------------------------------

document.innerHTML = `
  <div class="teste">
    <p> reiufoajnsdiopajsndiojpaosn f0iopajs </p>
  </div>
`