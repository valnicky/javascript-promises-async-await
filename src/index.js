import { fetchWithTimeout } from "./services";
import { fetchMovies} from "./services";
import {fetchBooks} from './services';

const movies = require("./data/movies.json");


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
 
 
 
 
 