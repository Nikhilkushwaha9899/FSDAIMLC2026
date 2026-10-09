import React, { useEffect, useState } from 'react'

export default function SampleUseEffect() {
    const[counter,setCounter]=useState(0);
    useEffect(() => {
        // console.log("Hey...using use effect")
        console.log("Counter"+counter)
    })
    function setCount(){
        setCounter(counter+5)
    }
    return (
        <div>
            <h2 style={{ color: 'green' }}>SampleUseEffect </h2>
            <h1>Counter value={counter}</h1>
            <button onClick={setCount}>Inc</button>
        </div>
    )
}
