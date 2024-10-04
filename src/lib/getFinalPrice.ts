import { listOfPrizes } from "@/components/listOfPrizes";

export function getFinalPrice(prizeId: any, cart: any) {
  // Find the promotion information based on the prizeId
  const promotionInfo = listOfPrizes.find((prize) => prize.id === prizeId);

  // Calculate the total price of the cart
  const cartPrice = cart.reduce(
    (acc: any, product: any) => acc + product.price,
    0
  );

  // Define default message and discounted price
  let message = "Brak promocji";
  let discountedPrice = cartPrice;
  let requiredQuantity;
  let isQualified;
  let requiredType;
  if (promotionInfo) {
    switch (promotionInfo.title) {
      case "Kod promocyjny -25%":
        discountedPrice = cartPrice * 0.75;
        message = "Kod aktywny";
        break;
      case "Kod promocyjny -20%":
        discountedPrice = cartPrice * 0.8;
        message = "Kod aktywny";
        break;
      case "Kod promocyjny -15%":
        discountedPrice = cartPrice * 0.85;
        message = "Kod aktywny";
        break;
      case "Kod promocyjny -10%":
        discountedPrice = cartPrice * 0.9;
        message = "Kod aktywny";
        break;

      case "3 + 1 Darmowa (d.)":
        requiredQuantity = 4;
        requiredType = "large";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 14.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "4 + 1 Darmowa (d.)":
        requiredQuantity = 5;
        requiredType = "large";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 14.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "5 + 1 Darmowa (d.)":
        requiredQuantity = 6;
        requiredType = "large";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 14.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "3 + 1 Darmowa (ś.)":
        requiredQuantity = 4;
        requiredType = "medium";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 12.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "4 + 1 Darmowa (ś.)":
        requiredQuantity = 5;
        requiredType = "medium";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 12.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "5 + 1 Darmowa (ś.)":
        requiredQuantity = 6;
        requiredType = "medium";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 12.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "3 + 1 Darmowa (m.)":
        requiredQuantity = 4;
        requiredType = "small";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 7.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "4 + 1 Darmowa (m.)":
        requiredQuantity = 5;
        requiredType = "small";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 7.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
      case "5 + 1 Darmowa (m.)":
        requiredQuantity = 6;
        requiredType = "small";
        isQualified = hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 7.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego";
        break;
    }
  }

  return {
    finalPrice: discountedPrice,
    message: message,
    beforeDiscount: cartPrice,
  };
}

// Helper function to check if the cart has a minimum number of types of products
function hasMinimumTypes(cart: any, countOfSizes: any, size: any) {
  const stickersOfType = cart?.reduce((total: any, product: any) => {
    if (product.size === size) {
      return total + product.quantity;
    }
    return total;
  }, 0);

  return stickersOfType >= countOfSizes;
}
