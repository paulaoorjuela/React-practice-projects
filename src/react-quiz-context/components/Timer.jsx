import { useEffect } from "react"
import { useQuiz } from "../context/QuizContext"

function Timer() {
    const { dispatch, secondsRemaining } = useQuiz()

    const mins = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60
    useEffect(function(){
        const timerId = setInterval(function(){
            dispatch({type: 'timerTick'})
        }, 1000)

        return () => clearInterval(timerId)
    }, [dispatch])
    return (
        <div className="timer">
            {mins < 10 && '0'}{mins}:{seconds < 10 && '0'}{seconds}
        </div>
    )
}

export default Timer
