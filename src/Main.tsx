import React from 'react';
import Ingredients from './components/Ingredients';
import Diets from './components/Diets';
import './styles/Main.css';
import { Recipes } from './models/Recipes';
import RecipesComponent from './components/RecipesComponent';
import { Grid } from '@mui/material';

function Main() {
  const [recipes, setRecipes] = React.useState<Recipes[]>([]);

  const updateRecipes = (recipes: Recipes[]) => {
    setRecipes(recipes);
  }

  return (
    <div style={{paddingTop: "2%", paddingLeft: "2%"}}>
      <Grid container spacing={0}>
        <Grid item xs={.8}>
          <Ingredients onUpdateRecipes={updateRecipes} />
        </Grid>
        <Grid item xs={11.2}>
          <Diets />
        </Grid>
      </Grid>
      <div> <RecipesComponent recipes={recipes} /> </div>
    </div>

  );
}

export default Main;
