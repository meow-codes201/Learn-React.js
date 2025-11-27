import PropTypes from 'prop-types';
import './List.css'
function List(props){

// fruits.sort((a,b)=> a.name.localeCompare(b.name));//ascending
// fruits.sort((a,b)=> b.name.localeCompare(a.name))//descending 
// fruits.sort((a,b)=> a.calories - b.calories);
// fruits.sort((a,b)=> b.calories - a.calories)
//filter by low calories
// const lowCalFruit = fruits.filter(fruit => fruit.calories <100);
// const highClFruits = fruits.filter(fruit => fruit.calories >= 100)
const listItem = props.items;
const category = props.category;
const listItems = listItem.map(item =>{
    return <li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>
});
return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
</>

);


}
List.propTypes = {
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
    name:PropTypes.string,
    calories:PropTypes.number

}
    ))
    
}
export default List