import React from 'react'
import pic from '../images/images.jpeg'
function Icard({data}) {//object

  return (
    <div  style={{ border: '10px solid red',height:'520px',width:'300px',margin:'auto' }}>
    <h2 style={{backgroundColor:'aqua',color:'black'}}>ABES Enginnering College</h2>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Name : {data.name} </h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Roll : {data.roll} </h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Branch : {data.branch}</h3>
    <img src={data.pic} height={'300px'} width={'300px'} style={{borderRadius:'50%'}}></img>
    </div>
  )
}
export default Icard

// import React from 'react'
// import pic from '../images/images.jpeg'
// function Icard(props) {

//   return (
//     <div  style={{ border: '10px solid red',height:'520px',width:'300px',margin:'auto' }}>
//     <h2 style={{backgroundColor:'aqua',color:'black'}}>ABES Enginnering College</h2>
//     <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Name : {props.name} </h3>
//     <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Roll : {props.roll} </h3>
//     <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Branch : {props.branch}</h3>
//     <img src={props.pic} height={'300px'} width={'300px'} style={{borderRadius:'50%'}}></img>
//     </div>
//   )
// }
// export default Icard