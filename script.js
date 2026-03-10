const elementos = document.querySelectorAll(".fade")

function animarScroll(){

const alturaTela = window.innerHeight

elementos.forEach(el => {

const pos = el.getBoundingClientRect().top

if(pos < alturaTela - 100){
el.classList.add("show")
}

})

}

window.addEventListener("scroll", animarScroll)

animarScroll()

let carrinho = []
let total = 0

function addPedido(nome, preco){

carrinho.push({nome,preco})

total += preco

renderCarrinho()

}

function renderCarrinho(){

let lista = document.getElementById("listaPedidos")

lista.innerHTML=""

carrinho.forEach(item=>{

let li = document.createElement("li")

li.innerText = item.nome + " - R$ " + item.preco

lista.appendChild(li)

})

document.getElementById("totalPedido").innerText =
"Total: R$ " + total.toFixed(2)

}

function enviarPedido(){

let mensagem = "Pedido:%0A"

carrinho.forEach(item=>{
mensagem += "- "+item.nome+"%0A"
})

mensagem += "%0ATotal: R$ "+total.toFixed(2)

window.open(
`https://wa.me/5511999999999?text=${mensagem}`,
"_blank"
)

}