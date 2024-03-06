import React from 'react'

export default function App1(props) {
  
  return (
    <div style={{backgroundColor:'pink'}}>
      Hello {props.name}. You are {props.age}
    </div>
  )
}
App1.defaultProps = {name:"cat", age:20};