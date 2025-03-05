import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ScoreKeeper({ players, target }) {
    const [scores, setScores] = useState(new Array(players).fill(0));
    const incrementScore = (index) => {
        setScores((oldScores) => {
            return oldScores.map((score, i) =>{
                if(i === index){
                    return score + 1;
                }
                return score;
            })
        });
    };
    const resetScores = () => {
        setScores(new Array(players).fill(0));
    };
    return (
        <div>
            <ul>
            {scores.map((score, index) => {
                return (
                <li style={{color: score >= target && 'green'}} key={index}>Player{index +1}: {score}
                    <button onClick={() => incrementScore(index)} disabled={scores.includes(target)}>+1</button>
                    {score >= target && <p>WINNER</p>}
                </li>
                )
            })}
            </ul>
            <button onClick={resetScores}>Reset Scores</button>
        </div>
    );
}
