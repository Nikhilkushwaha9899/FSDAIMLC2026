import React, { useState } from "react";
import cat from '../images/canva.jpg';
function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(200);
    const [catWidth, setCatWidth] = useState(200);
    const [catRotate, setCatRotate] = useState(0);
    const [divmar, setMa] = useState(0);

    function setCH() {
        setCatHeight(catHeight + 10);
    }
    function setWH() {
        setCatWidth(catWidth + 10);
    }
    function DsetCH() {
        setCatHeight(catHeight - 10);
    }
    function DsetWH() {
        setCatWidth(catWidth - 10);
    }
    function setR() {
        setCatRotate(catRotate + 90);
    }
    function setRM() {
        setMa(divmar - 10);
    }
    function setLM() {
        setMa(divmar + 10);
    }
    return (
        <div>
            <h2 style={{ color: 'red', backgroundColor: 'green' }}>ImageManipulation</h2>
            <div style={{ border: '2px solid white', height: '400px', width: '400px', marginRight: `${divmar}px`, marginLeft: `${divmar}px`, backgroundColor: 'white' }}>
                <img src={cat} height={catHeight} width={catWidth} style={{ transform: `rotate(${catRotate}deg)` }}></img>
            </div>

            <div>
                <button onClick={setCH}>Enhance Height</button>
                <button onClick={setWH}>Enhance Width</button>
                <button onClick={DsetCH}>Dec Height</button>
                <button onClick={DsetWH}>Dec Width</button>
                <button onClick={setR}>Rotate</button>
                <button onClick={setRM}>RightMargin</button>
                <button onClick={setLM}>LeftMargin</button>
            </div>
        </div>
    )
}
export default ImageManipulation