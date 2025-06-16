import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader"
import Error from "./Error"
import Question from "./Question"

import "./index.css";
import Main from "./Main";
import StartScreen from "./StartScreen";

const InitialState = {
    questions:[],
    status: 'loading' // 'loading', 'error', 'ready', 'active', 'finished
}
function reducer(state, action){
    switch(action.type){
        case 'dataRecived' : return { ...state, questions: action.payload, status: 'ready'}
        case 'dataError' : return{ ...state, status: 'error'}
        case 'startQuiz' : return { ...state, status: 'active'}
        default: throw new Error("Unknown action type"); 
    }

}

export default function App() {
    const [{questions, status}, dispatch] = useReducer(reducer, InitialState)

    const numQuestions = questions.length;

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
                {status === 'loading' && <Loader />}
                {status === 'error' && <Error />}
                {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
                {status === 'active' && <Question/>}
            </Main>
        </div>
    );
}
