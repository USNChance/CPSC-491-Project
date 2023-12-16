import React from 'react';
import { Recipes } from '../models/Recipes';
import { Link } from 'react-router-dom';

export interface RecipeProps {
  recipes: Recipes[];
}

const RecipesComponent: React.FC<RecipeProps> = (props: RecipeProps) => {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        
        {props.recipes && props.recipes.map((recipe, index) => (
          <Link to={`/recipe/${recipe.id}`}>
              <h2>{recipe.title}</h2>
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecipesComponent;
