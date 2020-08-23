export const getBasketTotal = shoppingCart =>
    shoppingCart?.reduce((amount, product) => product.price + amount, 0);