import React, { useEffect, useState } from 'react';
//TODO: Add import for RecipeTitle
import RecipeTitle from './RecipeTitle';
import Menu from './Menu';
import IngredientList from './IngredientList';
import RecipeSteps from './RecipeSteps';


function App() {
  
    //TODO: Add recipe object
    const initialRecipe = {
        title:'Mashed potatoes',
        feedback:{
            rating:4.8,
            reviews:20
        },
        ingredients:[
            {name:'3 potatoes, cut into 1/2',prepared:false},
            {name:'4 Tbsp butter',prepared:false},
            {name:'1/8 cup heavy cream',prepared:false},
            {name:'Salt',prepared:true},
            {name:'Pepper',prepared:true},
        ],
        prepare:[
            {step:'1.Add the diced potatoes to a pot with very salty water.'},
            {step:'2. Bring the pot to a boil.'},
            {step:'3. Boil the potatoes until tender, about 15-20 minutes.'},
            {step:'4. Drain the potatoes.'},
            {step:'5. Return the potatoes to the pot.'},
            {step:'6. Add butter, cream, salt, and pepper to taste.'},
            {step:'7. Mash the potatoes.'},
            {step:'8. Re-season and add butter and cream to taste.'},
        ]
    } 

    //TODO: Create recipe state 
    const [recipe,setRecipe] = useState(initialRecipe);

     // TODO: Add new state property
     const [prepared,setPrepared] = useState(false);

     // TODO: Create ingredientClick event listener
     function ingredientClick(index){ 
        const updatedRecipe = { ... recipe};
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);

     } 

     // TODO: Add the effect hook 
     useEffect(() =>{
        setPrepared(recipe.ingredients.every(i => i.prepared));
     },[recipe]);


    return (
    <article> 
        <h1>Recipe Manger</h1>

        {/* TODO: Pass recipe metadata to RecipeTitle  */}
        <RecipeTitle title={recipe.title} feedback={recipe.feedback} /> 

        {/* TODO: Pass ingredients and event listener to IngredientList */}
         <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick} />

        {/* TODO: Add the prep work display */} 
        {prepared ? <h2>Prep work done!</h2> : <h2>Just Keep choping</h2>}
        
        <RecipeSteps prepare={recipe.prepare} />
        <div>
            <Menu/>
        </div>
      
    </article>
  )
}

export default App
