import axios from 'axios';

//https://api.spoonacular.com/recipes/661741/information?apiKey=23dd190d7eb845bfa43d9747e3dbd110
                       
export const fetchRecipes = async (ingredients: string[]) => {
    return axios.get(
    'https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
            'ingredients': ingredients.join(', '),
            number: 25,
            ignorePantry: true,
            apiKey: "a522fe97fd9f4c1e9b82ac41ee5770ae",
        },
    },
    )
    .then((response) => {
        return response.data;
    })
}

export const getRecipe = async (id: string) => {
    return axios.get(
    `https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
            apiKey: "a522fe97fd9f4c1e9b82ac41ee5770ae",
        },
    },
    )
    .then((response) => {
        return response.data;
    })
}