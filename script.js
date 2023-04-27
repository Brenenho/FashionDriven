


let nomemodelo = "";
let nomegola = "";
let nometecido = "";
let usuario = prompt("Qual seu nome?")
let valor = document.querySelector('.imagemlink');
let texto = ""
let modelos = "";
let golas = "";
let tecidos = "";
    
let pedidos = [];

function usuarionome() {
    const usuarionome = document.querySelector('.usuario');
    usuarionome.innerHTML = `Olá, ${usuario}!`
}

usuarionome()

function verificaselecao() {
    
    texto = valor.value;

    if (nomemodelo !== "") {
      if (nomegola !== "") {
        if (nometecido !== "") {
          if (texto !== "") {
            const botaoFinalizar = document.querySelector('.botao');
                  botaoFinalizar.classList.add('avancar');               
                  botaoFinalizar.removeAttribute('disabled');
            
          }
            if (texto == '') {
                const botaoFinalizar = document.querySelector('.botao');
                botaoFinalizar.classList.remove("avancar");
                botaoFinalizar.setAttribute('disabled', '');
            
          }
          }
        }
      }
    }

    function textobranco() {
        const botaoanterior3 = document.querySelector('.imagemlink');
    if (botaoanterior3 == "") {
      botaoanterior3.classList.remove("avancar");
      botaoanterior3.setAttribute('disabled', '');
    }
    }

    function selecionarmodelo(modelo) {
            
        const botaoanterior = document.querySelector(".modeloblusa .selecionado");
        
    if (botaoanterior !== null) {
      botaoanterior.classList.remove("selecionado");
    }
        
        const imagem = modelo.querySelector('img')
        imagem.classList.add("selecionado");
    
        
      nomemodelo = modelo.querySelector('p').innerHTML;
      
      modelos = modelo.id;
      
      verificaselecao()
      
       
    
    }

    function selecionargola(gola) {
            
        const botaoanterior1 = document.querySelector(".golablusas .selecionado");
        
    if (botaoanterior1 !== null) {
      botaoanterior1.classList.remove("selecionado");
    }
        
        const imagem = gola.querySelector('img')
        imagem.classList.add("selecionado");
    
        
      nomegola = gola.querySelector('p').innerHTML;

      

      
     
      golas = gola.id;
      
      
      verificaselecao()
       
    
    }

    function selecionartecido(tecido) {
            
        const botaoanterior3 = document.querySelector(".materialblusas .selecionado1");
    if (botaoanterior3 !== null) {
      botaoanterior3.classList.remove("selecionado1");
    }
        
        const imagem = tecido.querySelector('.imggola')
        imagem.classList.add("selecionado1");
    
        
      nometecido = tecido.querySelector('p').innerHTML;

      tecidos = tecido.id;

      
      
      
      
      verificaselecao()
    
    
    }
function pegarLista() {
  

const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
promise.then(processarListaRecebidaDoServidor); 
}

pegarLista();

function processarListaRecebidaDoServidor(res){
    
    pedidos = res.data;


    renderizarMensagens(pedidos);
  }




function renderizarMensagens(pedidosx) {

    // pegar a lista ul no html
    const ulPedidos = document.querySelector('.pedidos');
    ulPedidos.innerHTML = '';

    // percorrer a minha lista de receitas
    for( let i = 0; i < pedidosx.length; i++){
        // pergar receita por receita
        let pedido = pedidosx[i];
        
        // criar um elemento <li>] e adicionar no meu elemento <ul>
        ulPedidos.innerHTML += `
        <div class="divpedido" onclick=confirma()>
            <img src="${pedido.image}" alt="">
            <p class "titulopedidox"><span class="criador">Criador: </span>${pedido.owner}</p>
        </div>
        `;
    }
}

function filtrartshirt(tshirtselecionada) {
  const tshirt = pedidos.filter(
    (pedido) => pedido.model === "t-shirt"
  );
  renderizarMensagens(tshirt);

  const botaoanterior = document.querySelector(".filtros .selecionado2");
        
    if (botaoanterior !== null) {
      botaoanterior.classList.remove("selecionado2");
    }
        
        
        tshirtselecionada.classList.add("selecionado2");
}

function filtrarcamiseta(camisetaselecionada) {
  const camiseta = pedidos.filter(
    (pedido) => pedido.model === "top-tank"
  );

  renderizarMensagens(camiseta);

  const botaoanterior = document.querySelector(".filtros .selecionado2");
        
    if (botaoanterior !== null) {
      botaoanterior.classList.remove("selecionado2");
    }
        
        
        camisetaselecionada.classList.add("selecionado2");
}



function filtrarlong(longselecionada) {
  const long = pedidos.filter(
    (pedido) => pedido.model === "long"
  );

  renderizarMensagens(long);

  const botaoanterior = document.querySelector(".filtros .selecionado2");
    if (botaoanterior !== null) {
      botaoanterior.classList.remove("selecionado2");
    }
        
        
        longselecionada.classList.add("selecionado2");
}

function filtrartodos(todosselecionada) {
  const todos = pedidos;

  renderizarMensagens(todos);

  const botaoanterior = document.querySelector(".filtros .selecionado2");
    if (botaoanterior !== null) {
      botaoanterior.classList.remove("selecionado2");
    }
        
        
        todosselecionada.classList.add("selecionado2");
}








    function inserirPedido() {
        
        
        const promessa = axios.post(
          "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
          {
            model: modelos,
            neck: golas,
            material: tecidos,
            image: texto,
            owner: usuario,
            author: usuario
        }
        );
      
        promessa.then(enviosucesso);
        promessa.catch(erroimagem)
       
      }

      function enviosucesso(mensagemenviada) {
        
    
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
        const imagem = document.querySelector('.areapedido')
        imagem.classList.add("hidden");
        const imagem2 = document.querySelector('.confirmacao')
        imagem2.classList.remove("hidden");
       
        

        



        promise.then(mensagemchegou);
        
      }
    
      function mensagemchegou(respostaatualizada) {
    
        var timeleft = 10;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            
            clearInterval(downloadTimer);
            
            const imagem = document.querySelector('.areapedido')
            imagem.classList.remove("hidden");
            const imagem2 = document.querySelector('.confirmacao')
            imagem2.classList.add("hidden");
          } else {
            const imagem2 = document.querySelector('.confirmacao')
            imagem2.innerHTML = `
                    <p class="pedidorealizado">Pedido feito com sucesso!</p>
                    <img src="${texto}" alt="">
                    <p class="aviso">Voltando para a página principal em ${timeleft}s</p>
            `;
          }
          timeleft -= 1;
        }, 1000);
        
        pedidos = respostaatualizada.data;
        renderizarMensagens(pedidos);
        
        
        
      }

      function erroimagem(erro) {
        
        const imagem = document.querySelector('.areapedido')
        imagem.classList.add("hidden");
        const imagem2 = document.querySelector('.confirmacao')
        imagem2.classList.remove("hidden");
    
          var timeleft = 10;
          var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
              clearInterval(downloadTimer);
              const imagem = document.querySelector('.areapedido')
              imagem.classList.remove("hidden");
              const imagem2 = document.querySelector('.confirmacao')
              imagem2.classList.add("hidden");
            } else {
              const imagem2 = document.querySelector('.confirmacao')
              imagem2.innerHTML = `
                      <p class="pedidorealizado">Algo deu errado!</p>
                      <p class="aviso1">Um passarinho me contou que a imagem não é válida. Tente novamente!</p>
                      <img src="/imagens/erro.png" alt="">
                      <p class="aviso">Voltando para a página principal em ${timeleft}s</p>
              `;
            }
            timeleft -= 1;
          }, 1000);
        }

        function confirma() {
          if (confirm("Deseja confirmar o pedido?") == true) {
            alert("Pedido realizado com sucesso!");
          } 
        }
    
        axios.defaults.headers.common['Authorization'] = 'Kps7jJcX6bsjiTXoVfNJrPap';


