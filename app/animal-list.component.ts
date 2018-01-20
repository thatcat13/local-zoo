import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
  <div class='filter-container'>
  <select class='filter-select' (change)="onChange($event.target.value)">
  <option value="allAnimals">All Fantastic Animals</option>
  <option value="young">The Younger Fantastic Animals</option>
  <option value="herbivore">The Fantastic Herbivores</option>
  <option value="omnivore">The Fantastic Omnivores</option>
  <option value="carnivore">The Fantastic Carnivores</option>
  </select>
  </div>
  <div *ngFor='let currentAnimal of childAnimalList | animalAge:filterByAnimalAge' class='list-container'>
    <h5>Latin Name: {{currentAnimal.latinName}}</h5>
    <h5>Common Name: {{currentAnimal.commonName}}</h5>
    <h5>Animal Name: {{currentAnimal.name}}</h5>
    <h5>Age: {{currentAnimal.age}}</h5>
    <h5>Diet: {{currentAnimal.diet}}</h5>
    <h5>Location: {{currentAnimal.location}}</h5>
    <h5>Caretakers: {{currentAnimal.caretakers}}</h5>
    <h5>Sex: {{currentAnimal.sex}}</h5>
    <h5>Likes: {{currentAnimal.likes}}</h5>
    <h5>Dislikes: {{currentAnimal.dislikes}}</h5>
    <button class='update-btn' (click)="editButtonHasBeenClicked(currentAnimal)">Update Animal</button>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAnimalAge: string = "allAnimals";

  filterByAnimalDiet: string = "allAnimals";

  onChange(optionFromMenu){
    this.filterByAnimalAge = optionFromMenu;
    this.filterByAnimalDiet = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }



}
