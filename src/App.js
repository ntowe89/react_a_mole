import { useState } from "react";
import MoleContainer from "./Components/MoleContainer";
import './App.css'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = [] 
    for (let i = 0; i < 9; i++){
      hills.push(
        <MoleContainer
        key= {i}
        setScore={setScore}
        score={score}
        />
      )
    }
    return (
      <div>
        { hills }
      </div>
    )
  }

  return (
    <div className="container">
      <div className="score">
        <h1>React-A-Mole!</h1>
        {score}
      </div>
      <div className="moles">
        {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
