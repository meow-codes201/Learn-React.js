import React,{useState} from "react";
function Favorites(){
    const myFav  = [];
    const [allFav,setAllFav] = useState(['💦🌹','😸','💡🫖','🔥🧤','🟤🎁','🐎','🍎🥧',]);
    const thingsElemnts = allFav.map((item,index)=>{
        return <p key={index}>{item}</p>
    });


    return(
        <main>
            <ul>
                {thingsElemnts}
            </ul>
        </main>
    )




}
export default Favorites;