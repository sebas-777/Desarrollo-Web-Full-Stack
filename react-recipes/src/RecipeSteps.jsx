import React from 'react'

function RecipeSteps(props) {
  
    //create the list steps using map
    const recipeSteps = props.prepare.map
    ((prepares, index) =>{
        return( 
             //Return the desired HTML for each steps
             <ol key={index} className={prepares.steps ? 'steps' : ''}>
                {prepares.step}
             </ol>

        );
    })
  
    return (
    <div>
        <h2>Recipe Steps</h2>
        <ul>
        {recipeSteps}
        </ul>
    </div>
    
  )
}

export default RecipeSteps