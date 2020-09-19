import { fetchWithTimeout } from "./services";
import { fetchMovies, fetchBooks } from "./services";

const movies = require("./data/movies.json");

/*export function fetchMovies() {
  const resolveFunction = () => movies;

  return fetchWithTimeout(1000).then(resolveFunction);
}*/

/*let moviePromise = fetchMovies();

moviePromise.then((results) => {
  console.log(results);
});
*/

 getBooksAndMovies() {
  return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
      books,
      movies,
    }))
    .catch((error) => console.log("Error fetching books and movies", error));
}

 getBooksOrMovies() {
 return Promise.race([fetchBooks(), fetchMovies()]).then(results => results).catch(error => console.log("Error waiting for the promise race"));
 }
 
 const getBooksOrMoviesPromise = getBooksOrMovies();
 
 getBooksOrMoviesPromise.then(results, console.log('getBooksOrMoviesPromise', results));
 
 
 
 
 