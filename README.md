# Trainee-Code-Test

This will be an attempt at documentation, going through each added method in an attempt to explain how I did it and how my thoughtprocess went while doing it.

I started by changing the constructor so that while loading the movies into the class they were parsed from Json data into a more easily accessed Json object. If the movies would have to be kept in Json data format at the end, it would be simple to JSON.stringify() it in the end, before sending them to another class or method was my logic here.

moviePrep() method was added to the fetchAllMovies() method to fulfill the requirement of having the movies have an id and a rating assigned to them before storing them. I assumed storing in this case referred to the 'const allMovies'. In moviePrep() I loop through each object in movies, adding an id from the var i used to loop, and using movieRating() to add a randomly picked rating for the movie. I made it into it's own method as I needed to use it later as well. The movieRating() method simply returns a number between 1 and 5.

fetchMoviesFromGenre() starts by prompting the user for a genre to look for. After that I create an empty array, moviesOfGenre, to store the movies in when/if found. A check is done to see if the user picked any genre, which might be a bit pointless as the user can still fill in some random number or word that will lead to nothing being found either way, but if the user didn't write anything an error messaged is created and the empty array is returned. This is to insure that nothing crashes, as the method is supposed to return result either way. I then loop through allMovies, comparing the object's genre to the chosen genre, and if they are equal I add the specific movie into moviesOfGenre to be stored. As an extra check I also see if the array is empty, and if so prints an error message that nothing was found. moviesOfGenre array is then returned, ending the method.

removeMovie(id) uses the provided id to filter out the object with the specified id from allMovies, by overwriting allMovies with an filtered version of allMovies. It goes through allMovies, looking at it's elements, movie, and removes all movies with an id attribute equal to the id supplied to the method (in this case it will either find one, or no movie, to be removed).

filterSubtitleThumb() creates a temporary copy off allMovies, which can then be used to delete both the subtitle and thumb attribute of all elements in itself. The temporary copy is then returned, without any subtitle nor thumb attributes.

addMovie() allows the user to add their own movie, the user is prompted to write the info needed which is stored in variables. The id is supplied by taking the current length of allMovies, and adding 1 to the number so there is no duplicated id. The rating attribute is created with the same method used when storing all the movies in allMovies. After that the new movie is pushed into allMovies, so it will always end up at the last place in it.

findIdMovie(id) uses the id to loop through the movies in allMovies, finding, if possible, the movie with the same id. That movie object is then returned, if no movie is found the user gets a message that no movie with the specified id was found.

changeTitleOfIdMovie(newTitle) prompts the user for an id of the movie to have it's title changed. allMovies is the looped through, and if the chosen id is found, that movie has it's title changed to the provided title, newTitle. As there cannot be more than one movie with a specific id, it then returns so that no time is wasted looping through allMovies more than necessary. If no movie was found from the id search the user gets a message that no movie with the specific id could be found and no title change was done.
