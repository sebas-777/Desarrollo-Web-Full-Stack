import React from 'react'
import './style.css'



function IngredientList(props) {
    //create the list iteams using map
    const ingredientList = props.ingredients.map((ingredient, index) =>{
        return(
            // Return the desired HTML for each ingredient
            <li key={index} 
            className={ingredient.prepared ? 'prepared' : ''}
             // TODO: Add onClick event
             onClick={ () => props.onClick(index) }
            >
                {ingredient.name}
            </li>
        );
    })
         
    
    // return the HTML for the component 
    // ingredientListItems will be rendered as li elements

  return ( 
    <div>
        <h2>Ingredients</h2>
        <ul>
        { ingredientList}
        </ul>
    </div>
    
  );
}

export default IngredientList
