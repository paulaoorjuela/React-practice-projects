const initialStateCostumer = {
    fullName : "",
    nationalID : "",
    createdAt: ""
}

export default function costumerReducer(state = initialStateCostumer, action){
    switch(action.type){
        case "costumer/createCostumer":
            return {...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}
        case "account/updateName":
            return {...state, fullName: action.payload}
        default:return state
    }
}

export function createCostumer(fullName, nationalID){
    return {type: 'costumer/createCostumer', payload: {fullName, nationalID, createdAt: new Date().toISOString()}}
}

export function updateName(fullName){
    return {type: 'account/updateName', payload: fullName}
}

// store.dispatch(createCostumer("Paula", "0987654321"))
// console.log(store.getState());