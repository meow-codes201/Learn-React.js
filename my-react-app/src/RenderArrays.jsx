function RenderArrays() {
const ninjaTurtles = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];
const ninja = [<h2>Leonardo</h2>, <h2>Michelangelo</h2>, <h2>Donatello</h2>, <h2>Raphael</h2>];

const ninjas = ninjaTurtles.map((ninja)=>{
    return <h2>{ninja}</h2>
})

return(<>
{ninjaTurtles}
{ninja}
<hr />
<div>{ninjas}</div>
</>)





}
export default RenderArrays;