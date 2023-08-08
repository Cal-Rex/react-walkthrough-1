import React, { useState } from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('I1');
    const [comments, setComments] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("name:", name, ", Catgeory:", category, ", Comments:", comments);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                    id='id-name'
                    name="name"
                    type="text"
                    ></input>
            </div>
            <div>
                <label htmlFor='id-category'>Category:</label>
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    id="id-category"
                    name="category"
                    >
                    <option value="I1">Issue 1</option>
                    <option value="I2">Issue 2</option>
                    <option value="I3">Issue 3</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                    id="id-comments"
                    name="comments"
                    />
            </div>
            <input type='submit' value='Submit'></input>
        </form>
    </div>
  )
}


export default ControlledFormHooks