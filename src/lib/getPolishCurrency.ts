export function getPolishCurrency(priceToFormat: number) {
  return priceToFormat.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
}
