var csharp = document.getElementById('csharp');
var ts = document.getElementById('ts');
var js = document.getElementById('js');
var java = document.getElementById('java');
var php = document.getElementById('php');
var lista = document.getElementById("lista");
var array = new Array;
var deletar = '';
var posicao;

var manipulador = (evento) => {
    if (evento.target.checked == true) {
        array.push(evento.target.value);
        console.log(array);
        limpar();
        atualizaLista();
    }
    else{

        deletar = evento.target.value;
        deletarLista();
        limpar();
        atualizaLista();
    }
    
};

csharp?.addEventListener("click", manipulador);
ts?.addEventListener("click", manipulador);
js?.addEventListener("click", manipulador);
java?.addEventListener("click", manipulador);
php?.addEventListener("click", manipulador);

function deletarLista(){
    for (var i = 0; i < array.length; i++) {
        if(array[i] == deletar)
        posicao = i;
    }
    array.splice(posicao, 1)
}

function atualizaLista() {

    for (var i = 0; i < array.length; i++) {
        var novo = document.createElement("li");
        var selecionado = array[i];
        novo.textContent = selecionado;
        lista?.appendChild(novo);
    }
};

function limpar(){
    var limpaLista = document.getElementById('lista')!;
    limpaLista.innerText = '';
};

