import { combineReducers, legacy_createStore as createStore } from 'redux';

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

const initialStateCostumer = {
    fullName : "",
    nationalID : "",
    createdAt: ""
}

function accountReducer(state = initialStateAccount, action){
    switch(action.type){
        case "account/deposit":
            return {...state, balance: state.balance + action.payload}
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload}
        case "account/requestLoan":
            if(state.loan > 0) return state
            return {...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount}
        case "account/payLoan":
            return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan}
        default:
            return state
    }
}

function costumerReducer(state = initialStateCostumer, action){
    switch(action.type){
        case "costumer/createCostumer":
            return {...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}
        case "account/updateName":
            return {...state, fullName: action.payload}
        default:return state
    }
}

const rootReducer = combineReducers({
    account : accountReducer,
    costumer : costumerReducer
})

const store = createStore(rootReducer)

// store.dispatch({type: "account/deposit", payload: 1000 })

// console.log(store.getState());

// store.dispatch({type: "account/withdraw", payload: 500 })

// console.log(store.getState());

// store.dispatch({type: "account/requestLoan", payload: {amount: 1000, purpose: "Buy a car"} })

// console.log(store.getState());

// store.dispatch({type: "account/payLoan", payload: {amount: 1000, purpose: "Buy a car"} })

// console.log(store.getState());

function deposit(amount){
    return {type: "account/deposit", payload: amount }
}

function withdraw(amount){
    return {type: "account/withdraw", payload: amount }
}

function requestLoan(amount, purpose){
    return {type: "account/requestLoan", payload: {amount: amount, purpose: purpose} }
}
function payLoan(){
    return {type: "account/payLoan"}
}

store.dispatch(deposit(1000))
console.log(store.getState());
store.dispatch(withdraw(500))
console.log(store.getState());
store.dispatch(requestLoan(5000, "Buy a car"))
console.log(store.getState());
store.dispatch(payLoan())
console.log(store.getState());

function createCostumer(fullName, nationalID){
    return {type: 'costumer/createCostumer', payload: {fullName, nationalID, createdAt: new Date().toISOString()}}
}

function updateName(fullName){
    return {type: 'account/updateName', payload: fullName}
}

store.dispatch(createCostumer("Paula", "0987654321"))
console.log(store.getState());







