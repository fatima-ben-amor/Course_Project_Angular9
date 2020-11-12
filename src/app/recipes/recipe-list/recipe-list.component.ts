import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //new event
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] =[
  new Recipe('A test Recipe', 'this is our first test', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png'),
  new Recipe('A second Recipe', 'this is our the second test', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png')

];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe : Recipe){
  this.recipeWasSelected.emit(recipe);
}
}
