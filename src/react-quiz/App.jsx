import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader"
import Error from "./components/Error"
import Question from "./components/Question"
import "./index.css";
import Main from "./Main";
import StartScreen from "./components/StartScreen";

const InitialState = {
    questions:[],
    status: 'loading', // 'loading', 'error', 'ready', 'active', 'finished'
    index: 0,
    answer: null,
    points: 0
}
function reducer(state, action){
    switch(action.type){
        case 'dataRecived' : return { ...state, questions: action.payload, status: 'ready'}
        case 'dataError' : return{ ...state, status: 'error'}
        case 'startQuiz' : return { ...state, status: 'active'}
        case 'newAnswer' : 
            const currentQuestion = state.questions.at(state.index)
            return { ...state, answer: action.payload, points: action.payload === currentQuestion.correctOption ? 
                state.points + currentQuestion.points : state.points
            }
        default: throw new Error("Unknown action type"); 
    }

}

export default function App() {
    const [{ questions, status, index, answer }, dispatch] = useReducer(reducer, InitialState)

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
                {status === 'active' && <Question question={questions[index]} dispatch={dispatch} answer={answer}/>}
            </Main>
        </div>
    );
}
