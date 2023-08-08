import React, { useState } from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3])
    
    // const addNums = () => {
    //     let lastNum = Number(nums.slice(-1)) + 1
    //     console.log(lastNum)
    //     setNums([...nums, lastNum]);
    // }
    
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }
    
    const buggyPushNums = () => {
        nums.push(nums.length + 1);
        setNums(nums);
        console.log(nums);
    }

    // const removeNum = () => {
    //     setNums(
    //         nums.filter((item, idx) => {
    //             return idx !== nums.length - 1;
    //         })
    //     )
    // }

    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                let lastNum = Number(nums.slice(-1))
                return idx !== lastNum - 1;
            })
        )
    }

  return (
    <div>
        <button onClick={addNums}>Add Item</button>
        <button onClick={buggyPushNums}>add items, but broken</button>
        <button onClick={removeNum}>remove item</button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays