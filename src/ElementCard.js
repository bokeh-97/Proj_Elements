import React from 'react'


function ElementCard (props){
  return(<div>
  <h1>{props.contents.symbol}</h1>
  <p>Name : {props.contents.name}</p>
   <p>Atomic Number : {props.contents.number}</p>
<hr/>
  
  </div>)
}

export default ElementCard