const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSanha = 12;
numeroSenha.textContent = tamanhoSanha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes{0}.onclick = diminuiTamanho;
botoes{1}onclick = aumentaTamanho;

function diminuiTamanho(){
    tamanhoSenha = tamanhoSanha-1;
numeroSenha.textContent = tamanhoSenha;
}