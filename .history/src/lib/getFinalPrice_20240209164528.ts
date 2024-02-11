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
      case "4 + 1 Darmowa (d.)":
      case "5 + 1 Darmowa (d.)":
      case "3 + 1 Darmowa (ś.)":
      case "4 + 1 Darmowa (ś.)":
      case "5 + 1 Darmowa (ś.)":
      case "3 + 1 Darmowa (m.)":
      case "4 + 1 Darmowa (m.)":
      case "5 + 1 Darmowa (m.)":
        const requiredQuantity = parseInt(promotionInfo.title.split(" ")[0]);
        const requiredType = promotionInfo.title.split(" ")[4].replace("(", "");
        const isQualified =
          hasMinimumQuantity(cart, requiredQuantity) &&
          hasMinimumTypes(cart, requiredQuantity, requiredType);
        discountedPrice = isQualified ? cartPrice - 14.9 : cartPrice;
        message = isQualified
          ? "Kod aktywny"
          : "Nie posiadasz wystarczającej ilości naklejek dla tego kodu rabatowego.";
        break;
    }
  }

  return { cartPrice: discountedPrice.toFixed(2), message: message };
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

// Helper function to check if the cart has a minimum quantity of a single product
function hasMinimumQuantity(cart: any, minQuantity: any) {
  return cart?.some((product: any) => product.quantity >= minQuantity);
}
