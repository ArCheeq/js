"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt("Один из последних просмотренных фильмов?", ''),
              rating = prompt("На сколько его оцените?", '');
        
        if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено давольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {console.log(personalMovieDB);}
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        if (genre == '' || genre == null) {
            i--;
            continue;
        } else {
            personalMovieDB.genres[i] = genre;
        }
    }
}

writeYourGenres();

console.log(personalMovieDB);