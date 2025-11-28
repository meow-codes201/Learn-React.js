import { func } from "prop-types";
import React, {useState} from "react"
import './ColorPicker.css'
function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");
function handleColorChange(event){

    setColor(event.target.value);
}


    return(
<>
<div className="color-picker-container">
<h1>color picker</h1>
<div className="color-display" style={{backgroundColor:color}}>
<p>selected color : {color}</p>
</div>
<label>select a color : </label>
<input type="color" value={color} onChange={handleColorChange} />
</div>

</>

);


}
export default ColorPicker