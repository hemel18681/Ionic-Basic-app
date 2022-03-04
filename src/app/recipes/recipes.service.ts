import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'T-bone Steak',
      imageUrl: 'https://www.staffordbros.com/wp-content/uploads/2020/10/steak-and-chips-vip-sauce.jpg',
      ingredients: ['French Fries', 'Beef', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce111.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe=> recipe.id === recipeId)
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe=> recipe.id!==recipeId);
  }
}
