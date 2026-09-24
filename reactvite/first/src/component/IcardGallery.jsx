import React from "react";
import Icard from "./Icard";
import pic from '../images/images.jpeg'

function IcardGallery(){
    const student=[
        {
        roll:'00',
        name:'bb',
        branch:'aiml',
        pic:pic
    },
     {
        roll:'01',
        name:'bb1',
        branch:'aiml',
        pic:pic
    },
     {
        roll:'02',
        name:'bb2',
        branch:'aiml',
        pic:pic
    },
     {
        roll:'03',
        name:'bb3',
        branch:'aiml',
        pic:pic
    }, 
    {
        roll:'03',
        name:'bb3',
        branch:'aiml',
        pic:pic
    },
    {
        roll:'03',
        name:'bb3',
        branch:'aiml',
        pic:pic
    },
    {
        roll:'03',
        name:'bb3',
        branch:'aiml',
        pic:pic
    },
    {
        roll:'03',
        name:'bb3',
        branch:'aiml',
        pic:pic
    },
]
    return (
        <div style={{display:"flex",flexWrap:'wrap',gap:'10px'}}>
            {/* <Icard pic={pic} roll="2400321530135" name="Nikhil" branch="AIML"></Icard>
            <Icard pic={pic} roll="2400321530135" name="Nikhil" branch="AIML"></Icard>
            <Icard pic={pic} roll="2400321530135" name="Nikhil" branch="AIML"></Icard>             */}
            
            {student.map((ele)=>(
                <Icard data={ele}></Icard>
            ))}
        </div>
    )
}
export default IcardGallery