import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

/**
 * SingleColor component displays a single color swatch with its hex value and percentage.
 * Allows user to click to copy the hex value to clipboard.
 */
const SingleColor = ({ rgb, weight, index, hexColor }) => {
    // State to show/hide the "copied" alert
    const [alert, setAlert] = useState(false);
    // Convert rgb array to string for CSS
    const bcg = rgb.join(',');
    // Get hex value string
    // const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;

    // Effect to hide alert after 3 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <article
            // Add 'color-light' class for lighter colors
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                // Copy hex value to clipboard and show alert
                navigator.clipboard.writeText(hexValue);
                setAlert(true);
            }}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
            {/* Show alert if color was copied */}
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    )
}

export default SingleColor
