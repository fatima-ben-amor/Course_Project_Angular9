import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//we should say loaded feature because we store which feature should be displayed
loadedFeatured = 'recipe';
  onNavigate(feature : string){
    this.loadedFeatured = feature;
  }
}
