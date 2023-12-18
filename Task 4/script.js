/* ------------------------------ TASK 4 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  //ar filmo biudzetas buvo didelis
  wasExpensive() {
    return this.budget > 100000000;
  }
}
//title/director/budget

const movie1 = new Movie("Kill Bill", "Quentin Tarantino", 1850000000);
const movie2 = new Movie("Wonka", "Paul King", 75000000);

console.log(movie1.wasExpensive()); // true
console.log(movie2.wasExpensive()); // false
