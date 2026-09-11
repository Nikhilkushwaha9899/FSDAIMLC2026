import React from "react";
import Icard from "./Icard";
import pic from '../images/images.jpeg'

function IcardGallery(){
    return (
        <div>
            <Icard pic={pic} roll="2400321530135" name="Nikhil" branch="AIML"></Icard>
            <Icard></Icard>
        </div>
    )
}
export default IcardGallery