import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

// * -> gerenators, se assimila a async  
export default function* rootSaga() {
 // yield -> 'await'
  yield all([cart])
}