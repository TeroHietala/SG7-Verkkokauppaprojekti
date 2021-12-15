import React from 'react'
import kuva1 from "../images/pianologo3.png"
import kuva2 from "../images/pianologo5.png"

export default function Karuselli() {
    return (
        <div className='kuva1'>
            <img src={kuva1} alt ="kuva1" />
        </div>
    )
}

export default function Karuselli2(){
    return (
        <div className='kuva2'>
            <img src={kuva2} alt ="kuva2" />
        </div>
    )
}
