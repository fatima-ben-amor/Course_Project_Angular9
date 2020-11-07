import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] =[
  new Recipe('A test Recipe', 'this is our first test', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png'),
  new Recipe('A test Recipe', 'this is our first test', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png')

];
  constructor() { }

  ngOnInit(): void {
  }

}
