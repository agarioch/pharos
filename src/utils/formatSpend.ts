const defaultOptions = {style: 'currency', currency:'USD', maximumFractionDigits:0}

export default function formatSpend(num: number, options?:Intl.NumberFormatOptions) {
  options = {...defaultOptions, ...options}
  return new Intl.NumberFormat('en-US', options).format(num);
}