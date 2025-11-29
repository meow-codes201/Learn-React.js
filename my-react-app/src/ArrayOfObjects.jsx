import { element, func } from "prop-types";
import React,{useState} from "react"
function ArrayOfObjects(){
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    function handleAddCar(){
        const newCar = {year:carYear,make:carMake,model:carModel};

        setCars(c => [...c,newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c=> c.filter((element,i)=>{
            if(i !== index){
                return element
            }
        }))
        
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }
return(
    <>
    <div>
    
    <h1>List of Car Objects</h1>    
    <ul>        
        {cars.map((car,index)=>{
            return <li key={index} onClick={()=>{handleRemoveCar(index)}} >{car.year} {car.make} {car.model}</li>
        })}
    </ul>
    <input type="number" value={carYear} onChange={handleYearChange}/>
    <input type="text" placeholder="Enter Car Make" value={carMake} onChange={handleMakeChange}/><br />
    <input type="text" value={carModel} placeholder="Enter Car Model" onChange={handleModelChange}/><br />
    {/* <input type="text" v0alue={carYear} onChange={handleYearChange}/> */} 

    <button onClick={handleAddCar}>Add Car</button>
        



    </div>    
    </>
);




}
export default ArrayOfObjects