const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    corteId = {};
    for(i=0;i<barbearia.cortes.length;i++){
        if(id == barbearia.cortes[i].id){
            corteId = barbearia.cortes[i];
        }
    }
    if(corteId.id == id){
        return corteId;
    }else{
        return "Corte não Encontrado";
    }
}

function buscaBarbaPorId(id) {
    barbaId = {};
    for(i=0;i<barbearia.barbas.length;i++){
        if(id == barbearia.barbas[i].id){
            barbaId = barbearia.barbas[i];
        }
    }
    if(barbaId.id == id){
        return barbaId;
    }else{
        return "Barba não Encontrada";
    }
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto == true){
        return "Estamos Abertos";
    }else{
        return "Estamos Fechados";
    }
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let corteId = buscaCortePorId();
    let barbaId = buscaBarbaPorId();
    pedido = {
        nome: nomeCliente,
        pedidoCorte: corteId,
        pedidoCortePreco: corteId.valor,
        pedidoBarba: barbaId,
        pedidoBarbaPreco: barbaId.valor,
    }
    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
    for(let i=0;i<lista.length;i++){
        if(id == lista[i].id){
            lista[i].tipo = tipo;
            lista[i].valor = valor;
        }
    }
    return lista;
}

function calculaTotal(pedido) {
    total = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
    return total;
}