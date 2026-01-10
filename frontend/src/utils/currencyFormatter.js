export default function currencyFormatted(price) {
  const formatted = Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  return formatted;
}
