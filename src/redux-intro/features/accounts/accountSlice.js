const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

export default function accountReducer(state = initialStateAccount, action){
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

// store.dispatch({type: "account/deposit", payload: 1000 })

// console.log(store.getState());

// store.dispatch({type: "account/withdraw", payload: 500 })

// console.log(store.getState());

// store.dispatch({type: "account/requestLoan", payload: {amount: 1000, purpose: "Buy a car"} })

// console.log(store.getState());

// store.dispatch({type: "account/payLoan", payload: {amount: 1000, purpose: "Buy a car"} })

// console.log(store.getState());

export function deposit(amount){
    return {type: "account/deposit", payload: amount }
}

export function withdraw(amount){
    return {type: "account/withdraw", payload: amount }
}

export function requestLoan(amount, purpose){
    return {type: "account/requestLoan", payload: {amount: amount, purpose: purpose} }
}
export function payLoan(){
    return {type: "account/payLoan"}
}

// store.dispatch(deposit(1000))
// console.log(store.getState());
// store.dispatch(withdraw(500))
// console.log(store.getState());
// store.dispatch(requestLoan(5000, "Buy a car"))
// console.log(store.getState());
// store.dispatch(payLoan())
// console.log(store.getState());