import { useQuiz } from "../context/QuizContext"

function Progress() {
    const { index, numQuestions, points, possiblePoints, answer } = useQuiz()
    return (
        <header className="progress">
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
            <p>Points: <strong>{points}</strong> / {possiblePoints}</p>
        </header>
    )
}

export default Progress
