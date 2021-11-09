export const getBasketTotal = shoppingCart =>
    shoppingCart?.reduce((amount, product) => product.price * product.quantity + amount, 0);