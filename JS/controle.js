let id=0;
let input = document.getElementById("inpTarefa");
let btnADD = document.getElementById("btnadd");
let main = document.getElementById("areaLista");

function addTarefa() {
    //pegando o valor digitado no input
    let valorINP = input.value;

    if ((valorINP !== null) && (valorINP !== "") & (valorINP !== undefined)) {
        id++;
        let novoItem =
        `<div id="${id}" class="item">
            <div onclick="marcarTarefa(${id})" class="item-icone">
                 <i id="icone_${id}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${id})" class="item-nome">
           ${valorINP}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${id})" class="delete">
                <i class="mdi mdi-delete"></i>
                 Deletar
                </button>
            </div>
        </div>`;
        //add novo item no main
        main.innerHTML += novoItem;
        //zerando os campos
        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup", function(event){
    //se teclou enter
    if(event.keyCode === 13){
        event.preventDefault();
        btnADD.click();
    }
});

function deletar(idDelete){
    var tarefa = document.getElementById(idDelete);
    tarefa.remove();
}

function marcarTarefa(idMarcado){
    var item = document.getElementById(idMarcado);
    var classe = item.getAttribute('class');

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+idMarcado);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+idMarcado);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}