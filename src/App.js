import React from 'react'
import ElementCard from './ElementCard'



function App(){
  const nums = [1,2,3,5]
  return (
    <div>
    <ElementCard contents={{symbol:"He",name:"Helium",number:"2"}}/>
    <ElementCard contents={{symbol:"Na",name:"Sodium",number:"11"}}/>
    <ElementCard contents={{symbol:"C",name:"Carbon",number:"14"}}/>
    
    </div>
  )
}

export default App