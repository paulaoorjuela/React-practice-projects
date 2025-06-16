import { useEffect, useReducer } from "react";
import Header from "./Header";
import "./index.css";
import Main from "./Main";

const InitialState = {
    questions:[],
    status: 'loading' // 'loading', 'error', 'ready', 'active', 'finished
}
function reducer(state, action){
    switch(action.type){
        case 'dataRecived' : return { ...state, questions: action.payload, status: 'ready'}
        case 'dataError' : return{ ...state, status: 'error'}
        default: throw new Error("Unknown action type"); 
    }

}

export default function App() {
    const [state, dispatch] = useReducer(reducer, InitialState)
    useEffect(function () {
        fetch("http://localhost:8000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataRecived", payload: data}))
            .catch((err) => dispatch({ type: "dataError"}));
    }, []);

    return (
        <div className="app">
            <Header />
            <Main>
                <p>1/15</p>
                <p>Question?</p>
            </Main>
        </div>
    );
}
