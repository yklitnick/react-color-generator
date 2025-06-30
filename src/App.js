import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#f12025').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }
    return (
        <>
            <section className='container'>
                <h4>color generator</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f12025'
                        className={`${error ? 'error' : null}`} />
                    <button className='btn' type='submit'>
                        submit
                    </button>
                </form>
            </section>
            <section className='colors'>
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>;
                })}
            </section>
        </>
    )
}

export default App
