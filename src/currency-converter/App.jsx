// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("EUR");
    const [amount, setAmount] = useState('1');
    const [converted, setConverted] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    useEffect(
    function () {
        // Validate if the value is a valid positive number
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            setIsInvalid(true)
            return
        }

        setIsInvalid(false)

        async function convert() {
        setIsLoading(true);
        const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        setConverted(data.rates[to]);
        setIsLoading(false);
        }
        if (from === to) return setConverted(amount);
        convert();
    },
    [amount, from, to]
    );

    return (
    <div>
        <input
        disabled={isLoading}
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        />
        {isInvalid && <p style={{ color: "red" }}>Enter a number greater than 0</p>}
        <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={isLoading}
        >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        </select>
        <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={isLoading}
        >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        </select>
        <p>
        {converted}
        {to}
        </p>
    </div>
    );
}
