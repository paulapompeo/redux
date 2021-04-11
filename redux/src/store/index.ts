// toda configuracao do redux da aplicaçao (é como se fosse um estado global)
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules/rootReducer';

import { ICartState } from './modules/cart/types';
import rootSaga from './modules/rootSaga';
export interface IState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

//store -> como se fosse um grande objeto de estado global
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga);

export default store;