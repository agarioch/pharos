export default function formatSpend(num: number) {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD', maximumFractionDigits:0}).format(num);
}