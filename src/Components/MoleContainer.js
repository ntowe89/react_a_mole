import { useState } from "react"
import Mole from "./Mole"
import EmptySlot from "./EmptySlot"

const MoleContainer = (props) => {
    const [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    const MoleOrNot = displayMole ? <Mole setScore={props.setScore} setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot setDisplayMole={setDisplayMole} /> 

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {MoleOrNot}
        </div>
    )
}

export default MoleContainer