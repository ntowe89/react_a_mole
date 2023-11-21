import { useEffect } from "react"
import moleImg from '../images/moleImg.bmp'

function Mole (props) {
   
    useEffect(() => {
        const randSeconds = Math.ceil(Math.random() * 5000)
        const timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    
    return (
        <div>
            <img style={{'width': '15vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole