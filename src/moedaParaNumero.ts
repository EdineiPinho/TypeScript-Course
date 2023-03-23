/**
 * Recebe string: '1.500,30' retorna numero: 1500.3
 */
export default function moedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
  return isNaN(numero) ? null : numero;
}