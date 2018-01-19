import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Fantastic Zoo</h1>
    <h3>{{currentAnimalList}}</h3>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  </div>
  `
})


export class AppComponent {
  currentAnimalList: string = 'Animals currently residing here: ';
  //component class is what this is declares how component BEHAVES

  masterAnimalList: Animal[] = [
  new Animal('Lutra Lutra', 'European Otter', 'Linda Otter', 3, 'pescetarian', 'River Zone', 2, 'F', 'fish, typing', 'loud noises'),

  new Animal('Talpa Europa', 'European Mole', 'Mole', 2, 'carnivore', 'Underground Zone', 2, 'M', 'earthworms', 'bright light'),

  new Animal('Oryctolagus Cuniculus', 'European Rabbit', 'Rabbit', 7, 'herbivore', 'Kitchen Zone', 2, 'M', 'cooking', 'cooks who are slow '),

  new Animal('Meles Meles', 'European Badger', 'Clive Badger, Esq.', 5, 'omnivore', 'Litigation Zone', 1, 'M', 'loyalty', 'reckless behavior'),

  new Animal('Castor Fiber', 'European Beaver', 'Beaver', 4, 'herbivore', 'Litigation Zone', 1, 'M', 'helping Mr. Fox', 'loud noises'),

  new Animal('Mustela Nivalis', 'Common Weasel', 'Wes Anderson', 5, 'carnivore', 'American Film Director Zone', 0, 'M', 'all things twee', 'terrible color palettes'),

];


}
