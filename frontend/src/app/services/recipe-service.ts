import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getRecipes(){
    return of(this.temprecipelist);
  }

  addRecipes(title: string, description: string, ingredients: string[]){
    try{
      this.temprecipelist.push({id: this.temprecipelist.length, title: title, description: description, ingredients: ingredients});
      return of(`You have added ${title}`);
    }
    catch (error){
      return of(error);
    }
  }

  deleteRecipe(title: string){
    let i = 0;
    for (; i < this.temprecipelist.length; i++){
      if (this.temprecipelist[i].title === title){
        break;
      }
    }

    this.temprecipelist.splice(i, 1);
  }


  private readonly temprecipelist: Recipe[] = [
    {
      id: 1,
      title: 'Pancakes',
      description: 'Fluffy pancakes',
      ingredients: ['flour', 'milk', 'eggs']
    },
    {
      id: 2,
      title: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta with meat sauce',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic']
    },
    {
      id: 3,
      title: 'Chicken Caesar Salad',
      description: 'Crisp romaine lettuce with grilled chicken and Caesar dressing',
      ingredients: ['romaine lettuce', 'chicken breast', 'parmesan cheese', 'croutons', 'Caesar dressing']
    },
    {
      id: 4,
      title: 'Vegetable Stir Fry',
      description: 'Quick and healthy mixed vegetable stir fry',
      ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce', 'ginger', 'garlic']
    },
    {
      id: 5,
      title: 'Chocolate Chip Cookies',
      description: 'Classic chewy chocolate chip cookies',
      ingredients: ['flour', 'sugar', 'butter', 'eggs', 'chocolate chips', 'vanilla extract']
    }
  ];
}
