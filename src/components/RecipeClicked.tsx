import React, { useEffect } from 'react';
import { getRecipe } from '../api/ApiCall';

import { useParams } from 'react-router-dom';
import { Recipe } from '../models/Recipe';

export interface RecipeProps {
  id?: number;
}


const RecipeClicked: React.FC<RecipeProps> = (props: RecipeProps) => {
  const [recipe, setRecipe] = React.useState<Recipe>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchRecipes() {
      setRecipe(await getRecipe(id));
    }

    fetchRecipes();
  }, [id])

  return (
    <div>
      <ul>
        {recipe && <>
          <h1>{recipe.title}</h1>
          <h2>{recipe.diets.join(', ')}</h2>

          <img src={recipe.image} alt={recipe.title} typeof={recipe.imageType} />

          <h2>Summary</h2>
            <div
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
            <br />
            <h2>Ingredients</h2>
            <div>
            {recipe.extendedIngredients.map(ingredient => 
              <React.Fragment>
                {`${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong} ${ingredient.name}`}<br/>
              </React.Fragment>)}
            </div>

            <h2>Instructions</h2>
            <div
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            /> 
        </>
        }
      </ul>
    </div>
  );
};

export default RecipeClicked;
