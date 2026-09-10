import React from 'react'
import pic from '../images/images.jpeg'
function Icard() {

  return (
    <div  style={{ border: '10px solid red',height:'480px',width:'250px',margin:'auto' }}>
    <h2 style={{backgroundColor:'aqua',color:'black'}}>ABES Enginnering College</h2>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Name : Nikhil Kushwaha </h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Roll : 2400321530135 </h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Branch : CSE-AIML</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Section : C </h3>
    <div ><img src={pic} height={'200px'} width={'250px'} style={{borderRadius:'50%'}}></img></div>
    </div>
  )
}
export default Icard