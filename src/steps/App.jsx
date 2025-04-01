import { useState } from "react";
import "./index.css";
import Button from "./Button";
import StepTitle from "./StepTitle";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1)

  function handlePrev() {
    if(step > 1 ) setStep((currStep) => currStep - 1)
  }

  function handleNext() {
    if(step < 3)setStep((currStep) => currStep + 1)
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <StepTitle step={step}>{messages[step-1]}</StepTitle>
      <div className="buttons">
        <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrev}><span>👈</span> prev</Button>
        <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>next <span>👉</span></Button>
      </div>
    </div>
  );
}
