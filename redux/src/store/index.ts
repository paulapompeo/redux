// toda configuracao do redux da aplicaçao (é como se fosse um estado global)
import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer)

export default store;