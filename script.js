const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listaTarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.innerHTML = "apagar";
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener("click", function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
    }
})

function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
        console.log(listaDeTarefas)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(listaDeTarefas);
}