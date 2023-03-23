export default function stringToDate(texto) {
    const [data, horario] = texto.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [hora, minuto] = horario.split(":").map(Number);
    const agora = new Date(ano, mes - 1, dia, hora, minuto);
    return agora;
}
//# sourceMappingURL=stringToDate.js.map