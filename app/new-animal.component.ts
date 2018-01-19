import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
  <h1>Add New Fantastic Animal</h1>
  <div>
    <label>Enter Latin Name:</label>
    <input #newLatinName><br>
    <label>Enter Common Name:</label>
    <input #newCommonName><br>
    <label>Enter Age:</label>
    <input #newAge>
    <label>Enter Diet:</label>
    <input #newDiet>
    <label>Enter Location:</label>
    <input #newLocation>
    <label>Enter Caretakers:</label>
    <input #newCaretakers>
    <label>Enter Sex:</label>
    <input #newSex>
    <label>Enter Likes:</label>
    <input #newLikes>
    <label>Enter Dislikes:</label>
    <input #newDislikes>
  </div>
  <div>
   <button (click)="submitForm(newLatinName.value, newCommonName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(latinName: string, commonName: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(latinName, commonName, name, age, diet, location, caretakers, sex, likes, dislikes);
    //Because our goal is to create a new Animal object anyway, it makes sense to construct it here before sending it upwards.
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
