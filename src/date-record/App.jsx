import { useState } from "react";
import "./styles.css";

export default function App() {
    return (
    <div className="App">
        <Counter />
    </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset() {
    setCount(0);
    setStep(1);
    }

    return (
    <div>
        <div>
        <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
        </div>

        <div>
            <button onClick={() => setCount((c) => c - step)}>-</button>
            <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            />
            <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
        <p>
            <span>
            {count === 0
                ? "today is: "
                : count > 0
                ? `${count} days from now is: `
                : `${Math.abs(count)} days ago was: `}
            </span>

            <strong>{date.toDateString()}</strong>
        </p>
        {count !== 0 || step !== 1 ? (
            <div>
            <button onClick={handleReset}>Reset</button>
            </div>
        ) : null}
    </div>
    );
}
