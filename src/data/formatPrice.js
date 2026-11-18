// Turns 4500 into "₩4,500".
const formatter = new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" });

export default function formatPrice(amount) {
  return formatter.format(amount);
}
