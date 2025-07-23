import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;

const InitialState = {
    questions: [],
    status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "dataRecived":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataError":
            return { ...state, status: "error" };
        case "startQuiz":
            return {
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * SECS_PER_QUESTION,
            };
        case "newAnswer": {
            const currentQuestion = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points:
                action.payload === currentQuestion.correctOption
                    ? state.points + currentQuestion.points
                    : state.points,
            };
        }
        case "nextQuestion":
            return { ...state, index: state.index + 1, answer: null };
        case "finish":
            return {
                ...state,
                status: "finished",
                highscore:
                state.points > state.highscore ? state.points : state.highscore,
            };
        case "restart":
            return { ...InitialState, questions: state.questions, status: "ready" };
        case "timerTick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            throw new Error("Unknown action type");
    }
}

// eslint-disable-next-line react/prop-types
function QuizProvider({ children }) {
    const [
        { questions, status, index, answer, points, highscore, secondsRemaining },
        dispatch,
    ] = useReducer(reducer, InitialState);

    const numQuestions = questions.length;
    const possiblePoints = questions.reduce(
        (prev, curr) => prev + curr.points,
        0
    );

    useEffect(function () {
        fetch("http://localhost:8000/questions")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataRecived", payload: data }))
        // eslint-disable-next-line no-unused-vars
        .catch((err) => dispatch({ type: "dataError" }));
    }, []);

    return (
        <QuizContext.Provider
        value={{
            questions,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
            numQuestions,
            possiblePoints,
            dispatch,
        }}
        >
        {children}
        </QuizContext.Provider>
    );
}

function useQuiz(){
    const context = useContext(QuizContext)
    if(context === undefined) throw new Error("useQuiz must be used within a QuizProvider")
    return context
}

// eslint-disable-next-line react-refresh/only-export-components
export {QuizProvider, useQuiz}
