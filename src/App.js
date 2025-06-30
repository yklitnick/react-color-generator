import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
    // State for the input color value
    const [color, setColor] = useState('');
    // State to track input error
    const [error, setError] = useState(false);
    // State for the list of color variations
    const [list, setList] = useState(new Values('#f12025').all(10));

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Generate color variations using the input color
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false); // Reset error if successful
        } catch (error) {
            // If invalid color, set error state
            console.log(error);
            setError(true);
        }
    }

    return (
        <>
            {/* Color generator form */}
            <section className='container'>
                <h4>color generator</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f12025'
                        className={`${error ? 'error' : null}`} // Add error class if needed
                    />
                    <button className='btn' type='submit'>
                        submit
                    </button>
                </form>
            </section>
            {/* Display generated color variations */}
            <section className='colors'>
                {list.map((color, index) => {
                    // Render SingleColor component for each color generated
                    return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>;
                })}
            </section>
        </>
    )
}

export default App
