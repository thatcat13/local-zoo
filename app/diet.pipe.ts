import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "animalDiet",
  pure: false
})


export class DietPipe implements PipeTransform {
  transform(input: Animal[], currentAnimalDiet) {
    var output: Animal[] = [];
    if (currentAnimalDiet === 'allAnimals') {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
    return output;
  }  else if (currentAnimalDiet === 'herbivore') {
        for (var i = 0; i < input.length; i++) {
          if (input[i].diet === 'herbivore') {
          output.push(input[i]);
          }
        }
      return output;
    } else if (currentAnimalDiet === 'carnivore') {
        for (var i = 0; i < input.length; i++) {
          if (input[i].diet === 'carnivore') {
          output.push(input[i]);
          }
        }
      return output;
    } else if (currentAnimalDiet === 'omnivore') {
        for (var i = 0; i < input.length; i++) {
          if (input[i].diet === 'omnivore') {
          output.push(input[i]);
          }
        }
        return output;
        } else {
          return input;
        }
  }
}
