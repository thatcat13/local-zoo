import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
  <div class='filter-container'>
  <select (change)="onChange($event.target.value)">
  <option value="allAnimals">All Fantastic Animals</option>
  <option value="young">The Younger Fantastic Animals</option>
  </select>
  </div>
  <div class='list-container' *ngFor='let currentAnimal of childAnimalList | animalAge:filterByAnimalAge'>
    <h5>Species: {{currentAnimal.latinName}}<button (click)="editButtonHasBeenClicked(currentAnimal)">Update Animal</button></h5>
    <h5>Name: {{currentAnimal.name}}</h5>
    <h5>Age: {{currentAnimal.age}}</h5>
    <h5>Diet: {{currentAnimal.diet}}</h5>
    <h5>Location: {{currentAnimal.location}}</h5>
    <h5>Caretakers: {{currentAnimal.caretakers}}</h5>
    <h5>Sex: {{currentAnimal.sex}}</h5>
    <h5>Likes: {{currentAnimal.likes}}</h5>
    <h5>Dislikes: {{currentAnimal.dislikes}}</h5>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
  }

  filterByAnimalAge: string = "allAnimals";

  onChange(optionFromMenu){
    this.filterByAnimalAge = optionFromMenu;
  }

}
