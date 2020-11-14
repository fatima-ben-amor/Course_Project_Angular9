import { from } from 'rxjs';
import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
     recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] =[
        new Recipe('A frensh tacos !',
         'Just awesome ! can\'t eat more', 
         'https://www.fish-tandoori.fr/wp-content/uploads/2016/09/1128_280.png',
         [
           new Ingredient('Meat', 2 ),
           new Ingredient('Chicken' , 5)
          ]),
          new Recipe('A frensh fries !',
         'A super tasty it \' just awesome', 
         'https://www.le-sultan.fr/produit/858_126.png',
         [
           new Ingredient('Meat', 2 ),
           new Ingredient('Chicken' , 5)
          ]),
        new Recipe('A fat Burger !', 
        'What else you want ?', 
        'https://lh3.googleusercontent.com/proxy/gl0o34w9SNVP5H9lnO9WXE4R8b-V6B2mXbXNexxCE5iEk9PpkcsL7_Z4AuUG7SiwL0-Ey1PP6piSS3QuXdj9vbzUc1svAFdgGWqrEC3L4XA5y2c4_H9bnZEt4JyU21M06zTY0FE',
        [
        new Ingredient('Bunt', 25 ),
        new Ingredient('french fries' , 5)
        ]),
        
      ];
      constructor(private shoppinglistservice : ShoppingListService) {}
    getRecipe(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients : Ingredient[]){
      this.shoppinglistservice.addIngredients(ingredients);

    }
}