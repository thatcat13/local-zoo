import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
    <h1>Local Zoo</h1>
  `
})


export class AppComponent {
  currentAnimalList: string = 'Animals currently residing here: ';
  //component class is what this is declares how component BEHAVES


}
