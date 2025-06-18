import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader"
import Error from "./components/Error"
import Question from "./components/Question"
import "./index.css";
import Main from "./Main";
import StartScreen from "./components/StartScreen";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const InitialState = {
    questions:[],
    status: 'loading', // 'loading', 'error', 'ready', 'active', 'finished'
    index: 0,
    answer: null,
    points: 0,
    highscore : 0
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
        case 'nextQuestion' : return {...state, index : state.index + 1, answer : null}
        case 'finish' : 
            return {...state, status: 'finished', highscore: state.points > state.highscore ? state.points : state.highscore}
        case 'restart' : return {...InitialState, questions: state.questions, status: 'ready'}
        default: throw new Error("Unknown action type"); 
    }

}

export default function App() {
    const [{ questions, status, index, answer, points, highscore }, dispatch] = useReducer(reducer, InitialState)

    const numQuestions = questions.length;
    const possiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);


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
                {status === 'active' && 
                <>
                    <Progress index={index} numQuestions={numQuestions} points={points} possiblePoints={possiblePoints} answer={answer} />
                    <Question question={questions[index]} dispatch={dispatch} answer={answer}/>
                    <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
                </>
                }
                {status ==='finished' && <FinishScreen points={points} possiblePoints={possiblePoints} highscore={highscore} dispatch={dispatch}/>}
            </Main>
        </div>
    );
}
