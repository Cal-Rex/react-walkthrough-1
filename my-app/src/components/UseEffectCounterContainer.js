import React, { useState } from 'react'
import UseEffectCounterWithTimer from './UseEffectCounterWithTimer'
function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);

  return (
    <div>
        <button onClick={ () => {
            setDisplay(!display)
        }}>
            Toggle Display
        </button>
        {display && <UseEffectCounterWithTimer />}
    </div>
  )
}

export default UseEffectCounterContainer