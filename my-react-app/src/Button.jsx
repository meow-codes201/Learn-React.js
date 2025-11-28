function Button(){
    let count = 0;
    const handleClick = (e) => {
        e.target.textContent = "you clicked me!😮";
        
        // console.log(e);

        
        // if(count<3){
        //     count++;
        //     console.log(`${name} you clicked me ${count} times`);
        // }
        // else{
        //     console.log(`${name} stop clicking me`);
            
        // }

    }
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
        

return(
<>

<button onClick={(e)=>handleClick(e)}>Click Me 😊</button>


</>
);


}
export default Button