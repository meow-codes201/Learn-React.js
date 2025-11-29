import React,{useState} from "react";
import './ToDoList.css'
import { element, func } from "prop-types";

function ToDoList(){

    const [tasks,setTasks] = useState(['wake up','eat breakfast','walk/run','buy groceries']);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t =>[...t,newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element,i)=>{
            return (index !== i)})
            setTasks(updatedTasks);
    }
    function moveTaskUp(index){
if(index>0){
    const updatedTasks = [...tasks];
    [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
    setTasks(updatedTasks);
}

    }
    function moveTaskDown(index){
if(index<tasks.length - 1){
    const updatedTasks = [...tasks];
    [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
    setTasks(updatedTasks);
}
 
    }

    return(
        <>
        <div className="to-do-list">
            <h1>To-Do-list</h1>
            <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
                />
                <button className="add-btn" onClick={addTask}>Add</button>





            </div>
            <ol>
                {tasks.map((task,index)=>{
                    return <li key={index}><span className="text">{task}</span>
                    <button className="delete-btn" onClick={()=>{deleteTask(index)}}>Delete</button>
                    <button className="move" onClick={()=>moveTaskUp(index)}>👆🏻</button>
                    <button className="move" onClick={()=>{moveTaskDown(index)}}>👇🏻</button>

                    </li>
                })}
            </ol>
        </div>       
        </>
    );




}
export default ToDoList