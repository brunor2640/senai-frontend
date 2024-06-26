let menuContent = document.querySelector('.content');
let menuToggle = menuContent.querySelector('.menu-toggle');
let show = true;

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuContent.classList.toggle('on', show);
    show = !show;
})

let itensCardapio = document.querySelector(".itens-cardapio");
let id = 0;
for (const p of produtos) {
    itensCardapio.innerHTML += `
    <div class="imagem">
        <img src="${p.img}" alt="${p.dsImg}">
        <div class="info">
            <h3>${p.nome}</h3>
            <h4>valor <span>R$${p.valor}</span></h4>
            <button id="id${id}" class="pedir">Comprar</button>
        </div>
    </div>
    `;
    id++;
}

let telaCarrinho = document.querySelector('.tela-carrinho');
let continuar = document.querySelector('.continuar');
continuar.addEventListener('click', () => {
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
})

let compras = document.querySelector('.compras');
compras.addEventListener('click', () => {
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
    menuToggle.click(); 
})

let lsPedido = document.querySelectorAll('.pedir');
for (const bt of lsPedido) {
    bt.addEventListener('click', () => {
        let id = bt.id.replace('id', '');
        bt.classList.toggle('selecionado');
        if(bt.innerHTML == 'REMOVER'){
            produtos[id].quantidade = 0;
            bt.innerHTML = 'comprar';
        }else{
            produtos[id].quantidade = 1;
            bt.innerHTML = 'REMOVER';
        }
        atualizarTabela();
    });
}

let tbody = document.querySelector('tbody');
function atualizarTabela() {
    tbody.innerHTML = '';
    let total = 0;
    let id = 0;
    for (const p of produtos) {
        if (p.quantidade > 0) {
            tbody.innerHTML += `
            <tr>
                <td>${p.nome}</td>
                <td>${p.quantidade}x${p.valor}=R$ ${p.quantidade * p.valor}(valor)</td>
                <td>
                    <i class="bi bi-plus-square-fill" id="plus${id}"></i>
                    <i class="bi bi-dash-square-fill" id="dash${id}"></i>
                </td>
            </tr>`;
            total += p.quantidade * p.valor;
        }
        id++;
    }
    document.querySelector('#total-pedido').innerHTML = `Valor total do pedido = R$${total}`;
    atualizarPlusDash('plus');
    atualizarPlusDash('dash');
}

function atualizarPlusDash(tipo) {
    let botoes = document.querySelectorAll(`.bi-${tipo}-square-fill`);
    for (const bt of botoes) {
        bt.addEventListener('click', () => {
            let id = bt.id.replace(tipo, '');
            if (tipo == 'plus') {
                produtos[id].quantidade++;
            }
            if (tipo == 'dash') {
                produtos[id].quantidade--;
                if(produtos[id].quantidade < 1){
                    document.getElementById('id'+id).click();
                }
            }
            atualizarTabela();
        });
    }
}

let enviar = document.querySelector('.enviar');
enviar.addEventListener('click', () => {
    let msg = 'Gostaria de fazer o seguinte pedido\n';
    let total = 0;
    for (const p of produtos) {
        if (p.quantidade > 0) {
            msg += `${p.nome} ${p.quantidade}x${p.valor}=${p.quantidade * p.valor}\n`;
            total += p.quantidade * p.valor;
        }
    }
    msg += `Total = ${total}`;
    msg = encodeURI(msg);
    let fone = '5561';
    let link = `https://api.whatsapp.com/send?phone=${fone}&text=${msg}`;
    window.open(link);
});
