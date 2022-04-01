var btn = document.querySelector("#pesquisa");
var produto=document.querySelector("#conteudo")
var arrayH5=document.querySelectorAll("h5")
var arrayP=document.querySelectorAll("p")
var produtos;



btn.addEventListener("click", (event) => {
  event.preventDefault();
  produto.classList.remove('d-none');
  var termo = document.querySelector("#termo").value.split(" ");
  termo=termo[0]
  const options={
      method:"GET",
      mode:"cors",
      cache:"default"
  }
   fetch(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${termo}&source=nanook`, options)
   .then((response)=>{response.json().then((data) =>{
    produtos=data.products;
   pegaElementos()
  })
   })
   .catch(((erro)=>{console.log("Deu erro:", + erro,message)})
   )
});


function pegaElementos(){
  for(let i=0; i<=5; i++){
    let nome= produtos[i].name 
    let id= produtos[i].id
    arrayH5[i].textContent=nome 
    arrayP[i].textContent=id 
  }}