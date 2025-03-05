import ColorBox from "./ColorBox";

export default function ColorGrid({colors}){
    const boxes = []
    for (let i = 0; i < 25; i++){
        boxes.push(<ColorBox colors= {colors}/>)
    }
    return(
        <div className="color-grid">
            {boxes}
        </div>
    )

}