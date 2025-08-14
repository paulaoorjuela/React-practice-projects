import { combineReducers, legacy_createStore as createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice'
import costumerReducer from './features/costumers/costumerSlice'


const rootReducer = combineReducers({
    account : accountReducer,
    costumer : costumerReducer
})

const store = createStore(rootReducer)

export default store









