import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
    <ul>
      <div *ngFor='let currentAnimal of childAnimalList'>
        <h4>Species: {{currentAnimal.species}}<button (click)="editButtonHasBeenClicked(currentAnimal)">Update Animal</button></h4>
        <h3>Name: {{currentAnimal.name}}</h3>
        <h3>Age: {{currentAnimal.age}}</h3>
        <h3>Diet: {{currentAnimal.diet}}</h3>
        <h3>Location: {{currentAnimal.location}}</h3>
        <h3>Caretakers: {{currentAnimal.caretakers}}</h3>
        <h3>Sex: {{currentAnimal.sex}}</h3>
        <h3>Likes: {{currentAnimal.likes}}</h3>
        <h3>Dislikes: {{currentAnimal.dislikes}}</h3>
      </div>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
}

}
