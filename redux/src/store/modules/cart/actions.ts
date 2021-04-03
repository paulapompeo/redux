import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    } //qualquer informacao adicionar (todos os parametros que recebemos)
  }
}