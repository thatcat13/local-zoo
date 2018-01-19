import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-root',
  template: `
    <div class='heading-container'>
      <div class='img-div'>
        <h1 class='fantastic-zoo'>Fantastic Zoo</h1>
        <img class='kylie' src="resources/img/kylie.png" alt="">
        <img class='athlete' src="resources/img/athlete.png" alt="">
      </div>
      <h2 class='currently-residing'>{{currentAnimalList}}</h2>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div><!--container-->
    <div>
    </div>
  `
})


export class AppComponent {
  currentAnimalList: string = 'Current residents:';
  //component class is what this is declares how component BEHAVES
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Lutra Lutra', 'European Otter', 'Linda Otter', 1, 'omnivore', 'Lawyer Office Zone', 2, 'F', 'fish, typing fast', 'loud noises'),
    new Animal('Talpa Europa', 'European Mole', 'Mole', 1, 'carnivore', 'Underground Zone', 2, 'M', 'earthworms', 'bright light'),
    new Animal('Oryctolagus Cuniculus', 'European Rabbit', 'Rabbit', 7, 'herbivore', 'Kitchen Zone', 2, 'M', 'cooking', 'cooks who are slow '),
    new Animal('Meles Meles', 'European Badger', 'Clive Badger, Esq.', 5, 'omnivore', 'Litigation Zone', 1, 'M', 'loyalty', 'reckless behavior'),
    new Animal('Castor Fiber', 'European Beaver', 'Beaver', 4, 'herbivore', 'Litigation Zone', 1, 'M', 'helping Mr. Fox', 'loud noises'),
    new Animal('Mustela Nivalis', 'Common Weasel', 'Wes Anderson', 5, 'herbivore', 'American Film Director Zone', 0, 'M', 'all things twee', 'terrible color palettes'),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
}


}
