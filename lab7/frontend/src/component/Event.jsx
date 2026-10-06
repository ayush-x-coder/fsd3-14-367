import React from 'react'
const MyButton=()=>{
    const handleClick=()=>{
        alert('Button Cicked')
    }
    return <button
    style={({height:"40px",width:"100px"})}
}
const Event= () => {
  return (
    <div>
        <MyButton/>
    </div>
  )
}

export default Event
