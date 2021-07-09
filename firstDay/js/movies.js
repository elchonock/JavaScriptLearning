"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// let movieObj = {};
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let nameOf = prompt("Один из оследних просмотренных фильмов?", "");
    let score = prompt("На сколько оцените его?", "");
    personalMovieDB.movies[nameOf] = score;    
}

console.log(personalMovieDB);





