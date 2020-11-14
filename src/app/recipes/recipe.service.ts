import { from } from 'rxjs';
import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService{
     recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] =[
        new Recipe('A test Recipe', 'this is our first test', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png'),
        new Recipe('A second Recipe', 'this is our the second test', 'https://cdn2.tompress.be/I-Grande-33761-livre-de-recettes-pour-potager-veritable-volume-1.net.jpg')
      
      ];
    getRecipe(){
        return this.recipes.slice();
    }
}