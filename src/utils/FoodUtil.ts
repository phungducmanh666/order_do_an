interface foodShortenTypes {
  originalPrice: number;
  discountType: number;
  discountValue: number;
}

export enum DISCOUNT_TYPE {
  NO_DISCONT = 0,
  PERCEN_DISCOUNT = 1,
  VALUE_DISCOUNT = 2,
}

export const getFoodRealPrice: (food: foodShortenTypes) => number | null = ({
  originalPrice,
  discountType,
  discountValue,
}) => {
  if (discountType === DISCOUNT_TYPE.NO_DISCONT) {
    return originalPrice;
  }

  if (discountType === DISCOUNT_TYPE.PERCEN_DISCOUNT) {
    return originalPrice - originalPrice * (discountValue / 100);
  }

  if (discountType === DISCOUNT_TYPE.VALUE_DISCOUNT) {
    return originalPrice - discountValue;
  }

  return null;
};
