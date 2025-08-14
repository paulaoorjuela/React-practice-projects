const initialStateCustumer = {
    fullName : "",
    nationalID : "",
    createdAt: ""
}

export default function custumerReducer(state = initialStateCustumer, action){
    switch(action.type){
        case "custumer/createCustumer":
            return {...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt}
        case "account/updateName":
            return {...state, fullName: action.payload}
        default:return state
    }
}

export function createCustumer(fullName, nationalID){
    return {type: 'custumer/createCustumer', payload: {fullName, nationalID, createdAt: new Date().toISOString()}}
}

export function updateName(fullName){
    return {type: 'account/updateName', payload: fullName}
}

// store.dispatch(createCustumer("Paula", "0987654321"))
// console.log(store.getState());