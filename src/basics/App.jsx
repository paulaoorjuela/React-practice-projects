import "./index.css";
// import Slot from "./Slot";
// import ColorGrid from "./ColorGrid";
import ScoreKeeper from "./ScoreKeeper";

function App() {
  // const options = ["🐵", "🐱", "🦋", "🐻"];
  const colors = [
    "#FFFFFF",
    "#C0C0C0",
    "#808080",
    "#FF0000",
    "#800000",
    "#FFFF00",
    "#808000",
    "#00FF00",
    "#008000",
    "#00FFFF",
    "#008080",
    "#0000FF",
    "#000080",
    "#FF00FF",
    "#800080",
    "#DFFF00",
    "#CCCCFF",
    "#40E0D0",
    "#9FE2BF",
    "#FF7F50",
  ];
  return (
    <>
      {/* <Slot options={options} />
      <Slot options={options} /> */}
      {/* <ColorGrid colors={colors} /> */}
      <ScoreKeeper players={4} target={4}/>
    </>
  );
}

export default App;
