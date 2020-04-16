import React,{useState} from 'react';
import './ColorBox.scss'

    function getRandomColor(){
    const COLORS = ['deeppink','yellow','red','green','lightblue']
    const randomIndex = Math.trunc(Math.random() * 5);
    console.log(COLORS[randomIndex])
    return COLORS[randomIndex]
}

function ColorBox() {
    const [color, setColor] = useState('yellow')

    function handleColorClick(){
       const newColor = getRandomColor();
       setColor(newColor)
    }

    return (
        <div className='ColorBox' 
            style={{backgroundColor: color}}
            onClick={handleColorClick}
        >
            Box 1
        </div>
    );
}

export default ColorBox;