const moviesJson = require('./movies.json');
class MovieAPI {
	constructor(movies) {
		this.movies = JSON.parse(movies);
	}

	fetchAllMovies() {
		moviePrep();
		return this.movies;
	}

	moviePrep() {
		for (var i = 0; i < this.movies.length; i++) {
			movie.id = i;
			movie.rating = movieRating();
		}
	}

	movieRating() {
		return Math.floor(Math.random() * 5) + 1;
	}

	fetchMoviesFromGenre() {
		var genre = prompt("Please enter a genre to search for");
		var moviesOfGenre = [];
		if (!genre) {
			console.error("You need to enter a genre");
			return moviesOfGenre;
		}
		for (var i = 0; i < allMovies.length; i++) {
			if (allMovies[i].genre === genre) {
				moviesOfGenre.push(movies[i]);
			}
		}
		if (moviesOfGenre.length === 0) {
			console.error("No movies with a genre of " + genre + " was found.");
		}
		return moviesOfGenre;
	}

	removeMovie(id) {
		allMovies = allMovies.filter(movie => movie.id == id);
	}

	filterSubtitleThumb() {
		var filteredMovies = allMovies;
		delete filteredMovies.subtitle;
		delete filteredMovies.thumb;
		return filteredMovies;
	}

	addMovie() {
		var description = prompt("Enter a description for the movie:");
		var sources = prompt("Enter a source for the movie");
		var subtitle = prompt("Enter a subtitle for the movie");
		var thumb = prompt("Enter a thumb for the movie");
		var title = prompt("Enter a title for the movie");
		var genre = prompt("Enter a genre for the movie");
		var id = allMovies.length + 1;
		var rating = movieRating();
		allMovies.push({
			"description": description, "sources": sources, "subtitle": subtitle, "thumb": thumb, "title": title,
			"genre": genre, "id": id, "rating": rating
		});
	}

	findIdMovie(id) {
		for (var i; i < allMovies.length; i++) {
			if (allMovies[i].id === id) {
				return allMovies[i];
			}
		}
		console.log("No movie with " + id + " was found.");
	}

	changeTitleOfIdMovie(newTitle) {
		var id = prompt("Please enter id of movie's title to be changed:");
		for (var i; i < allMovies.length; i++) {
			if (allMovies[i].id === id) {
				allMovies[i].title = newTitle;
				return;
			}
		}
		console.log("No movie with " + id + " was found, no title was changed.");
	}
}

const API = new MovieAPI(moviesJson);
const allMovies = API.fetchAllMovies();
