import styles from './MyMain.module.css'
function MyMain(){

    let ingredients = ['Tomato', 'Basil', 'Mozzarella'];
    let ingredientItems = ingredients.map((ingredient,index)=>{
        return <li key={index}>{ingredient}</li>
    })

    function formSubmit(event){
        event.preventDefault();
        const newIngredient = new FormData(event.currentTarget).get('ingredient');
        // console.log(newIngredient);
        ingredients.push(newIngredient);
    }
    return(
        <>
        <main className='myMainElement'>
        <form onSubmit={formSubmit} className={styles.ingredientForm} action="#">
        <input className={styles.ingredientInput} type="text"
        name='ingredient'
         aria-label="Add ingredient"
        placeholder="e.g. Oregano"
        />
        <button className={styles.ingredientButton}>Add ingredient</button>
        </form>
        <ul>{ingredientItems}</ul>
        </main>
        </>
    )

}
export default MyMain;