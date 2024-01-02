class Movie {
  /* a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
  a String representing the studio, and a String representing the rating as its arguments, 
  and sets the respective class properties to these values.

     b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.*/

  constructor(title, studio, reating = "PG") {
    this.title = title;
    this.studio = studio;
    this.reating = reating;
  }

  /* c) Write a method getPG, which takes an array of base type Movie as its argument, 
  and returns a new array of only those movies in the input array with a rating of "PG". 
  You may assume the input array is full of Movie instances. The returned array need not be full.*/

  static getPG(movie) {
    let newArr = [];
    for (let ind = 0; ind < movie.length; ind++) {
      if (movie[ind].reating === "PG") {
        newArr.push(movie[ind]);
      }
    }
    return newArr;
  }
}

const movieObj1 = new Movie("movie1", "studio1", "PG");
const movieObj2 = new Movie("movie2", "studio2", "PG-14");
const movieObj3 = new Movie("movie3", "studio3", "xyz");
const movieObj4 = new Movie("movie4", "studio4", "PG");
const movieObj5 = new Movie("movie5", "studio5", "PG-94");
const movieObj6 = new Movie("movie6", "studio6", "PG-4");
const movieObj7 = new Movie("movie7", "studio7", "PG");
const movieObj8 = new Movie("movie8", "studio8", "PG-01");
const movieObj9 = new Movie("movie9", "studio9", "PG-84");
const movieObj10 = new Movie("movie10", "studio10", "PG");

const movieArray = [
  movieObj1,
  movieObj2,
  movieObj3,
  movieObj4,
  movieObj5,
  movieObj6,
  movieObj7,
  movieObj8,
  movieObj9,
  movieObj10,
];
const movieWithPGReating = Movie.getPG(movieArray);
for (let ind in movieWithPGReating) {
  console.log(movieWithPGReating[ind]);
}

/* d) Write a piece of code that creates an instance of the class Movie with 
the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/

const pieceOfCode = new Movie("Casino Royale", "Eon Productions", "PG­13");

console.log("Title : " + pieceOfCode.title);
console.log("Studio : " + pieceOfCode.studio);
console.log("Reating : " + pieceOfCode.reating);
