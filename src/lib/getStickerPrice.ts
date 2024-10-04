export type Size = "small" | "medium" | "large";

export function getPrice(quantity: number, size: Size) {
  let sizePrice = 0;

  switch (size) {
    case "small":
      sizePrice = 7.9;
      break;
    case "medium":
      sizePrice = 12.9;
      break;
    case "large":
      sizePrice = 17.9;
      break;
    default:
      sizePrice = 0;
  }

  let sumBeforeDiscount = sizePrice * quantity;
  let sumAfterDiscount = 0;

  if (quantity >= 3 && quantity <= 5) {
    sumAfterDiscount = sizePrice * quantity * 0.9; // 10% discount
  } else if (quantity > 5 && quantity <= 9) {
    sumAfterDiscount = sizePrice * quantity * 0.8; // 20% discount
  } else if (quantity > 9) {
    sumAfterDiscount = sizePrice * quantity * 0.7; // 30% discount
  } else {
    sumAfterDiscount = sumBeforeDiscount;
  }

  return { sumBeforeDiscount, sumAfterDiscount };
}

export function getStickerPriceNotification(quantity: number, size: Size) {
  let sizePrice = 0;
  let discountPercentage = 0;

  switch (size) {
    case "small":
      sizePrice = 7.9;
      break;
    case "medium":
      sizePrice = 12.9;
      break;
    case "large":
      sizePrice = 17.9;
      break;
    default:
      sizePrice = 0;
  }

  let totalPrice = 0;
  if (quantity >= 1 && quantity < 3) {
    totalPrice = sizePrice * quantity;
  } else if (quantity >= 3 && quantity <= 5) {
    totalPrice = sizePrice * quantity * 0.9; // 10% discount
    discountPercentage = 10;
  } else if (quantity > 5 && quantity <= 9) {
    totalPrice = sizePrice * quantity * 0.8; // 20% discount
    discountPercentage = 20;
  } else if (quantity > 9) {
    totalPrice = sizePrice * quantity * 0.7; // 30% discount
    discountPercentage = 30;
  } else {
    totalPrice = 0;
  }

  const savedAmount = sizePrice * quantity - totalPrice;
  const notification = `Kupując ${quantity} oszczędzasz ${discountPercentage}% (-${savedAmount.toFixed(
    2
  )} zł)`;
  return { notification };
}
