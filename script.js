const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual método ajuda a conservação ambiental",
    alternativas: [
        {
texto:"Economia de energia",
afirmacao:"economizar energia, é guardar energia"
        },
        {
texto:"Queimar lixo",
afirmacao:"queimar lixo não é certo, além de prejudicar os animais, prejudicar pessoas"
        }
]
},
{
    enunciado: "O que provoca morte de animais? Qual soluções você sugere?",
    alternativas: [
        {

texto:"Poluição e retirar lixos",
afirmacao:"poluição mata, pois os animais comem lixos jogados"
        },
        {
texto:"Atropelamento,cuidado ao atravessar ambientes que tem animais silvestres",
afirmacao:"auto velocidade em lugares proibidos"
        }
]
},
{
    enunciado: "Qual lei você sujere que seja reforçada?Como?",
    alternativas: [
        {
texto:"Lei nº 9.065 de fevereiro de 1998, lei sobre condutas ilegais lesivas do meio ambiente. Deveria ter punimentos serevos",
afirmaçao:"monitoramento de punição de lei"
        },
        {
texto:"Art 18, nas terras de propriedades privada, onde seja necessário o florestamento ou reflorestamento de precisão permanente. O poder público federal poderia faze-lo sem desapropria-las, se não fizer o proprietário. ",
afirmaçao:"terras desapropriadas e não fazer o florestamento"
        }
]
}
   ];
   let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();