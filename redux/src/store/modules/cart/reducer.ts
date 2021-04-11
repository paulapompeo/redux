import { Reducer } from "redux";
import produce from 'immer';
import { ActionTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
}

// estados globais
// reducer faz tratativas (ex, somar produtos que ja estavam no carrinho), as actions são ações 'secas'
// reducer ouvir as informacoes diparadas pelas actions e vai fazer as alterações no estado
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id,
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        // immer utilizado para substituir: 
        // return {
        //   ...state,
        //   items: [
        //     ...state.items,
        //     {
        //       product, 
        //       quantity: 1,
        //     }
        //   ]
        // };
        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId)

        // alert('produto em falta')
        break;
      } 
      default: {
        return draft;
      }
    }
  });
}

export default cart;