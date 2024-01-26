export function getPolishCurrency(priceToFormat: number) {
  const cartString = priceToFormat.toString();

  if (cartString.length === 4) {
    return `${cartString[0]} ${cartString[1]}${cartString[2]}${cartString[3]},00 zł`;
  }
  if (cartString.length === 3) {
    return `${cartString[0]}${cartString[1]}${cartString[2]},00 zł`;
  }
  if (cartString.length === 3) {
    return `${cartString[0]}${cartString[1]},00 zł`;
  }
  if (cartString.length === 2) {
    return `${cartString[0]}${cartString[1]},00 zł`;
  }
}
