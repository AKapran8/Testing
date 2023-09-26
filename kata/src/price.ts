const PRICE_CONFIG = {
  A_PRICE: 50,
  B_PRICE: 30,
  C_PRICE: 20,
  D_PRICE: 15,
};

function setDiscount(key: "A" | "B", elCount: number): number {

  const discountValue: number = key === "A" ? 20 : 15;
  const discount: number = Math.trunc(elCount / 3) * discountValue;
  return discount;
}

export default function price(items: string): number {
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    switch (items[i].toUpperCase()) {
      case "AA":
        sum += PRICE_CONFIG.A_PRICE;
        break;
      case "A":
        sum += PRICE_CONFIG.A_PRICE;
        break;
      case "B":
        sum += PRICE_CONFIG.B_PRICE;
        break;
      case "C":
        sum += PRICE_CONFIG.C_PRICE;
        break;
      case "D":
        sum += PRICE_CONFIG.D_PRICE;
        break;
      default:
        throw Error("Invalid value");
    }
  }

  const aCount = items.split("").filter((l) => l.toUpperCase() === "A").length;
  const bCount = items.split("").filter((l) => l.toUpperCase() === "B").length;

  if (aCount >= 3) sum -= setDiscount("A", aCount);
  if (bCount >= 3) sum -= setDiscount("B", bCount);

  return sum;
}
