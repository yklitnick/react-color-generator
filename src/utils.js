// this code snippet converts RGB values to hexadecimal format
// this function is technically not needed as the `values.js` library handles it, but it's included for completeness
/* to use this function instead of `values.js`, you would need to uncomment the import statement at the top of
of the SingleColor.js file as well as the rgbToHex function and change hexValue to hex throughout the file */
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
