"use strict";
function log(log) {
    console.log(log);
    const myDiv = document.createElement('div');
    const myP = document.createElement('p');
    myDiv.appendChild(myP);
    myP.innerHTML += log;
    document.body.append(myDiv);
}
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetcher() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleJson(json);
}
fetcher();
function isCurso(value) {
    if (value &&
        typeof value === 'object' &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value) {
        return true;
    }
    return false;
}
function handleJson(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
      <div style=" width: 200px; display: inline-block; margin-right: 24px; border: 2px solid grey; padding: 0 24px;">
        <h2>${item.nome}</h2>
        <p>Duração: ${item.horas}</p>
        <p>Conteúdo: ${item.tags.join(', ')}</p>
      </div>
      `;
        });
    }
}
