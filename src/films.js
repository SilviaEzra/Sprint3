const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  

  const result = array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result; 
  
}
const directors = getAllDirectors(movies);
console.log(directors);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  return array.filter(movie => movie.director === director);

}
 const resultNolan = getMoviesFromDirector(movies, 'Christopher Nolan');
 console.log(resultNolan);

 // Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
   
   const resultMovies = array.filter(movie => movie.director === director);

   const total = resultMovies.reduce((total, movie) => total + movie.score, 0);
   const totalScore = total / resultMovies.length
   return parseFloat(totalScore.toFixed(2));
     
}
const resultMovies = getMoviesFromDirector(movies, 'Christopher Nolan');
console.log(moviesAverageOfDirector(resultMovies));




// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const order = array.slice().sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
});

const titles = order.map(movie => movie.title);
  const uniqueTitles = Array.from(new Set(titles)); 

  const orderAZ = uniqueTitles.slice(0, 20).sort();
  return orderAZ;

}

const first20 = orderAlphabetically(movies);
console.log(first20.toString());
  



// Exercise 5: Order by year, ascending
function orderByYear(array) {

  /* const orderYear = movies.slice().sort((a, b) => a.year - b.year); */
  const newArray = [...array]
  const orderYear = newArray.sort((a,b) => {
    if (a.year !== b.year){
      return a.year - b.year;}
      return a.title.localeCompare(b.title)
  }
  
  )
  return orderYear;
 
  /* if (orderYear.length === 1) {
    return [orderYear[0]];
  } else {
    const orderYearAZ = orderYear.slice().sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
    return orderYearAZ;
  } */
  /* const orderYear = movies.sort((a, b) => a.year - b.year)
  console.log(orderYear)
  
  const orderYearAZ = orderYear.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;});

    console.log(orderYearAZ) */


}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesGenre = array.filter(movie => movie.genre === genre);

  if (moviesGenre.length === 0) {
    return 0; 
  }

   const averageGenre = moviesGenre.reduce((avarage, movie) => avarage + movie.score, 0);
   const totalAvarage = averageGenre / moviesGenre.length;
   return parseFloat(totalAvarage.toFixed(2));

}

console.log(moviesAverageByCategory(movies, "Sci-Fi"));

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  return movies.map(movie => {
    
    const parts = movie.duration.split(' ');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    return {
      ...movie,
      duration: (hours * 60) + minutes
    };
  });
}

const moviesWithMinutesDuration = hoursToMinutes(movies);
console.log(moviesWithMinutesDuration);
  







// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
