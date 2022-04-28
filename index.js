const moviesJson = require('./movies.json');
class MovieAPI {
	constructor(movies) {
		this.movies = movies;
	}

	fetchAllMovies() {
		moviePrep();
		return this.movies;
	}

	//1. (REQUIRED) When instantiating the class with the imported movies.json file,
	// add an “id” and a random “rating” from 1 to 5 for each movie before storing it.
	moviePrep() {
		var id = 0;
		for(var i = 0; i < this.movies.length; i++) {
			movie.id = id;
			id++;
			movie.rating = movieRating();
		}
	}

	movieRating() {
		return Math.floor(Math.random() * 5) + 1;
	}

	//2. A method that returns movies from a certain genre.
	fetchMoviesFromGenre() {
		var genre = prompt("Please enter a genre to search for");
		var moviesOfGenre = [];
		for(var i = 0; i < allMovies.length; i++) {
			if(allMovies[i].genre === genre) {
				moviesOfGenre.push(movies[i]);
			}
		}
		if (!genre) {
			console.error("You need to enter a genre");
			return moviesOfGenre;
		}
		if (moviesOfGenre.length === 0) {
			console.error("No movies with a genre of " + genre + " was found.");
		}
		return moviesOfGenre;
	}

	//3. A method that removes a movie with a certain id (if found).
	removeMovie() {
		var id = prompt("Please enter an id to be removed");
		allMovies = allMovies.filter(movie => movie.id == id);
	}

	//4. A method that returns the movies with the subtitle and thumb properties filtered out.
	filterSubtitleThumb() {
		var filteredMovies = allMovies;
		delete filteredMovies['subtitle'];
		delete filteredMovies.thumb;
		return filteredMovies;
	}

	//9. A method that allows the user to add a new movie object to the movie list (supply all properties but the “id” and “rating”. 
	//The “id” and “rating” properties should be added internally by the method.
	addMovie() {
		var description = prompt("Enter a description for the movie:");
		var sources = prompt("Enter a source for the movie");
		var subtitle = prompt("Enter a subtitle for the movie");
		var thumb = prompt("Enter a thumb for the movie");
		var title = prompt("Enter a title for the movie");
		var genre = prompt("Enter a genre for the movie");
		var id = allMovies.length + 1;
		var rating = movieRating();
		allMovies.push({"description":description,"sources":sources,"subtitle":subtitle,"thumb":thumb,"title":title,
		"genre":genre,"id":id,"rating":rating});
	}

	//10. A method that returns a movie with a certain id (if found).
	findIdMovie(id) {
		for(var i; i < allMovies.length; i++) {
			if(allMovies[i].id === id) {
				return allMovies[i];
			}
		}
		console.log("No movie with " + id + " was found.");
	}

	//11. A method that changes the title of a movie with a certain id (if found). 
	//The updated title should be sent in as an argument to the method.
	changeNameOfIdMovie(newTitle) {
		var id = prompt("Please enter id of movie's title to be changed:");
		for(var i; i < allMovies.length; i++) {
			if(allMovies[i].id === id) {
				allMovies[i].title = newTitle;
				return;
			}
		}
	}
}

const API = new MovieAPI(moviesJson);
const allMovies = JSON.parse(API.fetchAllMovies());