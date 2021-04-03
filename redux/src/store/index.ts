// toda configuracao do redux da aplicaçao (é como se fosse um estado global)
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState
}

const store = createStore(rootReducer, composeWithDevTools())

export default store;