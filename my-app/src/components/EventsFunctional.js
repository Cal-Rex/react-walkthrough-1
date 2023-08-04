import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("clicked the functional component button")
    }

    return (
    <div>
        <button onClick={clickHandler}>Im a functional component. click me.</button>
    </div>
    )
}

export default EventsFunctional