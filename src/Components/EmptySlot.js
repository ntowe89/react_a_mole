import { useEffect } from "react"
import moleHill from '../images/moleHill.bmp'

const EmptySlot = (props) => {
   


    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    
    return (
        <div>
            <img  style={{'width': '15vw'}} src={moleHill} />
        </div>
    )
}

export default EmptySlot