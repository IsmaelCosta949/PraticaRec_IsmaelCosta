"use strict"
// ---------------------------------------------------------------------------------------------------
// window.addEventListener("beforeunload", function(e) {
//   e.preventDefault()
// })
// Local para adicionar post
const adicionarPost = document.querySelector('.post-modal')
const paginaAdicionar = document.querySelector('.form-post') 
const botaoAdicionar = document.querySelector('.plus')
const botaoEnviar = document.querySelector('.postar')
const postCompleto = document.querySelector('.secao-posts')
const botaoLogin = document.querySelector('.login')
const botaoCadsatro = document.querySelector('.signup')

// ---------------------------------------------------------------------------------------------------
// Local para enviar os posts
let imagem;
let comentario;
let nome;
var objeto = {comentario:comentario, imagem:imagem, nome:nome}
// ---------------------------------------------------------------------------------------------------
// Mostrando as consts
// console.log(adicionarPost);
// console.log(paginaAdicionar)
// console.log(botaoAdicionar)
// console.log(botaoEnviar)
// console.log(postCompleto)
// console.log(botaoLogin);
// ---------------------------------------------------------------------------------------------------
// Fazendo a parte de login
// criando o menu login
document.querySelector('.loginPg').innerHTML = `
<form class="for" action="#">
  <input type="text" class="nomeComent" placeholder="Insira o email">
  <input type="password" placeholder="Insira a senha">
  <a><button class="botaoLogar"><p>Logar</p></button></a>
</form>
`
// ---------------------------------------------------------------------------------------------------
// Estilizando o form do login
document.querySelector(".for").style = `
margin-left: 90rem; 
display:none; 
background: #1976d2;
width: 25rem; 
height: 18rem;
border-radius: 0px;
`;
// ---------------------------------------------------------------------------------------------------
// estilizando o botão do login
document.querySelector('.botaoLogar').style = `
width: 130px;
height: 23px;
`;
// ---------------------------------------------------------------------------------------------------
// Criando a pagina de sign up
document.body.querySelector('.singpg').innerHTML = `
<form class="for-up" action="#">
  <label value="nome">nome</label>
  <input type="text" placeholder="Insira o nome">
  <input type="text" placeholder="Insira o email">
  <input type="password" placeholder="Insira a senha">
  <a class="botaoLogar"><button><p>Logar</p></button></a>
</form>
`;
// ---------------------------------------------------------------------------------------------------
// Estilizando a pagina de sign up
document.querySelector('.singpg').style = `
margin-left: 85rem; 
display:none; 
background: #1976d2;
width: 25rem; 
height: 25rem;
border-radius: 0px;
`
// ---------------------------------------------------------------------------------------------------
// Estilizando a main
document.querySelector('main').style = `
background-color: #f4f4f6;
`;
// ---------------------------------------------------------------------------------------------------
// Estilizando o body
document.querySelector('body').style = `
background-color: #f4f4f6;
`;
// ---------------------------------------------------------------------------------------------------
// Estilizando o header
document.querySelector('header').style = `
background-color: #1976d2;
`;
// ---------------------------------------------------------------------------------------------------
// Criando a função para abir o menu login
botaoLogin.addEventListener('click', abrirLogin)
function abrirLogin(){
  if(botaoLogin.style.color != "white"){
    document.querySelector(".for").style.display = 'flex'
  }else{
    document.querySelector(".for").style.display = 'none'
    botaoLogin.innerText = "log in"
    botaoLogin.style = `background: white; color: blue`
    window.location.reload(true)
  }
}
// Fazendo uma função para confirmar o login
const botaoConfirmarLog = document.querySelector('.botaoLogar')
botaoConfirmarLog.addEventListener('click', confirmandoLog)
function confirmandoLog(){
    botaoLogin.innerText = "log out"
    botaoLogin.style = `background: #3333b6; color: white`
    document.querySelector(".for").style.display = 'none'
    const nome = document.querySelector('.nomeComent').value
    objeto.nome = nome
}
// ---------------------------------------------------------------------------------------------------
// Criando a função para abir o menu cadastro
botaoCadsatro.addEventListener('click', abrirCadastro)
function abrirCadastro(){
  document.querySelector('.for-up').style.display = 'flex'
}
// ---------------------------------------------------------------------------------------------------
// Verificar se o click está dentro da caixa
document.addEventListener('mousedown', (event) => {
  if (document.querySelector('.for').contains(event.target)){

  }else{
    document.querySelector('.for').style = `
    margin-left: 88rem; 
    display:none; 
    background: #1976d2;
    width: 25rem; 
    height:rem;
    border-radius: 0px;
    `
  }
})
// ---------------------------------------------------------------------------------------------------
document.addEventListener('mousedown', (event) => {
  if (document.querySelector('.for-up').contains(event.target)){

  }else{
    document.querySelector('.for-up').style = `
    margin-left: 88rem; 
    display:none; 
    background: #1976d2;
    width: 25rem; 
    height: 18rem;
    border-radius: 0px;
    `
  }
})
// ---------------------------------------------------------------------------------------------------
// Colocando a imagem cheia
const inputImagem = document.querySelector("#campo-foto");
inputImagem.addEventListener('change', carregaImagem)
function carregaImagem(e){
  let urlImagenPost = e.target.files[0].name;
  console.log(urlImagenPost);
  const imagem = document.createElement("img");
  imagem.setAttribute("src", `assets/images/${urlImagenPost}`)
  imagem.classList.add("imagem-form")
  const containerImagem = document.querySelector(".container-imagem");
  inputImagem.style.display = "none";
  containerImagem.appendChild(imagem)
  objeto.imagem = urlImagenPost
}

// ---------------------------------------------------------------------------------------------------
// Configurando o botão para mostar a parte de criar post
botaoAdicionar.onclick = mostarPost

function mostarPost(){
  if(botaoLogin.style.color == "white"){
    adicionarPost.style.display = 'flex'
    objeto.comentario = ""
  }else{
    alert("Não está logado")
  }
}
// ---------------------------------------------------------------------------------------------------
// Fazendo a animação apra quando clicar fora sumir a pagina
document.addEventListener('mousedown', (event) => {
  if (paginaAdicionar.contains(event.target)){
  }else{
    adicionarPost.style.display = 'none'
  }
})
// ---------------------------------------------------------------------------------------------------

// Fazendo a parte para enviar os posts
botaoEnviar.addEventListener('click', addPost)
function addPost(e){
  // confirmação para criar post
    if(confirm("Criar um post?") == true){
      // Sumindo a pagina de criar post ao clicar no botão e confirmar
        adicionarPost.style.display = 'none'
        // Fazendo o caminha para pegar os valores inseridos
        const comentarioPost = document.querySelector('.comentario-form').value
        // Passando os valores
        objeto.comentario = comentarioPost;
        // Criando o post ao enviar
        const novoPost = document.createElement("div")
        // Colocando uma classe no posts
        novoPost.className = "post"
        // Html do post 
        novoPost.innerHTML = `
        <div class="post-info">
          <div class="usuario-info">
            <div class="avatar"></div>
            <div class="nome-hora">
              <p class="nome">${objeto.nome}</p>
              <div id="timer"></div>
            </div>
          </div>
          <p class="comentario">
            ${objeto.comentario}
          </p>
        </div>
        <img class="post-imagem" src="./assets/images/${objeto.imagem}" alt="" />
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
      
// ---------------------------------------------------------------------------------------------------
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
                likeImage.src = "like-solid.svg"
                like.innerText = "Desgostar"
                like.style.color = "blue";
            } else {
                like.style.color = "black";
                likeImage.src = "like.svg";
                like.innerText = "Curtir"
            }
        }
// ---------------------------------------------------------------------------------------------------
        // pegando a caixa do comentario
        const caixaComent = novoPost.querySelector('.container-coment')
        caixaComent.addEventListener('click', coment)
        function coment(e){
          console.log("teste")
          if (caixaComent.style.color != "blue") {
            caixaComent.innerText = "contar"
            caixaComent.style.color = "blue";
        } else {
            caixaComent.style.color = "black";
            caixaComent.innerText = "comentarios"
        }
        }
// ---------------------------------------------------------------------------------------------------
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