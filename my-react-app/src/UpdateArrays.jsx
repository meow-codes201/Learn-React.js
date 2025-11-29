import { element } from "prop-types";
import React,{useState} from "react";

function UpdateArrays(){

    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);
    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f=>[...f,newFood]);


    }
    function handleRemoveFood(index){
        setFoods(foods.filter((element,i)=>{
            return i !== index;
        }))



    }

return(
    <>
    <div>
    <h2>List of foods</h2>
    <ul>
        {foods.map((food,index)=>{
            return <li onClick={()=>{
                handleRemoveFood(index)
            }} key={index}>{food}</li>
        })}
    </ul>
    <input type="text" id="foodInput" placeholder="enter food name" />
        <button onClick={handleAddFood}>Add food</button>
        {/* <button onClick={handleRemoveFood}></button> */}


    </div>
    
    
    </>
)

}
export default UpdateArrays