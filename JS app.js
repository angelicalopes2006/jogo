function criaCartao(materia, pergunta, resposta){
    let caixa =document.getElementById("caixa")
    let cartao =document.createElement("article")

    cartao.className = "cartao"

    cartao.innerHTML = `
         <div class="card__content"> 
                <h3> ${materia} </h3>
                <div class="card__content__question">
                    <p> ${pergunta} </p>
                </div>
                <div class="card__content__answer">
                    <p> ${resposta} </p>
                </div>
            </div>
    `

    caixa.appendChild(cartao)
}