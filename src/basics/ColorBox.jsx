import { useState } from "react"

function getRandomColor(arr){
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}
export default function ColorBox({colors}) {
    const [color, setColor] = useState(getRandomColor(colors));
    const handleClick = () => {
        const randomColor = getRandomColor(colors)
        setColor(randomColor);
    }

    return(
            <div onClick={handleClick} style={{backgroundColor: color, width: '40px', height: '40px'}}></div>
    )
}
