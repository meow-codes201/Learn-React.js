function PracticeMap(){

    const nums = [1,2,3,4,5];
    const squared  = nums.map((x)=>{ return x * x; });


    const names = ["alice", "bob", "charlie"];
    const title = names.map((name)=>{
        return name[0].toUpperCase() + name.slice(1)+ " ";});

const pokemon = ['bulbasaur', 'charmander', 'squirtle'];
const poke = pokemon.map((p)=>{
    return <li>{`<p>${p}</p>`}</li>
})
    return(
        <>
            <div>
                <h2>{nums}</h2>
            <h2>{squared}</h2>
            <hr />
<h4>{title}</h4>
            </div>
        <ul>{poke}</ul>
        </>



    );
}
export default PracticeMap;