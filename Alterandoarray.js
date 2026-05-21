// 1. Criando as variáveis de alunos e médias
const alunos = ['joão', 'juliana', 'ana', 'caio'];
const medias = [10, 8, 7.5, 9];

// 2. Criando a função de busca
function buscarNota(nomeDoAluno) {
    // Converte para minúsculo para evitar erros de digitação
    const nomeBusca = nomeDoAluno.toLowerCase();

    // Verifica se o aluno está na lista
    if (alunos.includes(nomeBusca)) {
        // Encontra o índice (posição) do aluno na lista
        const indice = alunos.indexOf(nomeBusca);
        
        // Retorna a média correspondente usando o mesmo índice
        return `A média final de ${nomeDoAluno} é: ${medias[indice]}`;
    } else {
        // Caso o nome não esteja na lista
        return "O aluno não foi encontrado.";
    }
}

// Exemplos de teste no console:
console.log(buscarNota("Ana"));    // A média final de Ana é: 7.5
console.log(buscarNota("João"));   // A média final de João é: 10
console.log(buscarNota("Carlos")); // O aluno não foi encontrado.
