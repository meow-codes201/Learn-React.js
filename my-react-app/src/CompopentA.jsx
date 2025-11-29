import React, { use, useState,createContext } from 'react';
import './Component.css'
import CompopentB from "./CompopentB";
export const UserContext = createContext();
function CompopentA(){

    const [user,setUser] = useState("Omnis")

    return(
        <div className="box">
            <h1>CompopentA</h1>
            <h2>Hello {user}</h2>
            <UserContext.Provider value={user}>

            <CompopentB user={user}></CompopentB>
            </UserContext.Provider>

        </div>
    )
}
export default CompopentA