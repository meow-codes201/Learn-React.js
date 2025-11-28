import { func } from "prop-types";
import React, {use, useState} from "react"
function MyComponent(){

const [name,setName] = useState("Guest");
const [quantity,setQuantity] = useState();
const [comment,setComment] = useState("");
const [payment,setPayement] = useState("");
const [shipping,setShipping] = useState("");

function handlePaymentChange(event){
    setPayement(event.target.value);
}
function handleCommentChange(event){
    setComment(event.target.value);
} 
function handleNameChange(event){

setName(event.target.value);
}
function handleShippingChange(event){
    setShipping(event.target.value);

}

function handleQuantityChange(event){
    setQuantity(event.target.value);
}

return(
    <>
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>name : {name}</p>
    <input type="number" value={quantity} onChange={handleQuantityChange} />
    <p>Quantity:{quantity}</p>

    <textarea value={comment} onChange={handleCommentChange}placeholder="delivery instructions"></textarea>
    <p>comment:{comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">visa</option>
        <option value="mastercard">mastercard</option>
        <option value="giftcard">giftcard</option>
    </select>
    <p>payement:{payment}</p>
    
    <label>
        <input type="radio" value="pick up"
        checked={shipping === "pick up"}
        onChange={handleShippingChange}
        />
        pick up
    </label>

<label>
            <input type="radio" value="delivery"
        checked={shipping === "delivery"}
        onChange={handleShippingChange}/>
        
    delivery
    
    </label>

    <p>Shipping:{shipping}</p>

    </div>
    </>
)
}
export default MyComponent