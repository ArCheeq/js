"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", ''),
      rating1 = prompt("На сколько его оцените?", ''),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?", ''),
      rating2 = prompt("На сколько его оцените?", '');


personalMovieDB.movies[lastFilm1] = rating1;
personalMovieDB.movies[lastFilm2] = rating2;

console.log(personalMovieDB);