"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyMovies(){
    for (let i = 0; i < 2; i++) {
        let nameOf, score;
        do {
        nameOf = prompt("Один из оследних просмотренных фильмов?", "");}
        while ((nameOf == null) || (nameOf == "") || (nameOf.length > 50));
        do {
        score = prompt("На сколько оцените его?", "");}    
        while (score == null || score == "");
        personalMovieDB.movies[nameOf] = score;   
    }
}

rememberMyMovies();


function detectPersonalLevel(){
    (personalMovieDB.count < 10) ? alert("Просмотрено довольно мало фильмов") : 
    ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) ? 
    alert("Вы классический зритель") : (personalMovieDB.count > 30) ? 
    alert("Вы киноман"): alert("Произошла ошибка");
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let favGenre = prompt(`Ваш любимый жанр под номером ${i+1} ?`, "");
        while (!favGenre){
        favGenre = prompt(`Ваш любимый жанр под номером ${i+1} ?`, "");
        }
        personalMovieDB.genres[i] = favGenre;
    }
}

writeYourGenres();













// варианты выполнения задания 15
// for (let i = 0; i < 2; i++) {
//     const nameOf = prompt("Один из оследних просмотренных фильмов?", ""); 
//     const score = prompt("На сколько оцените его?", "");
//     if (nameOf != null && score != null && nameOf != "" && score != "" && nameOf.length < 50) {
//         personalMovieDB.movies[nameOf] = score;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     } 
// }

// let i = 0;
// while (i < 2) {
//     let nameOf, score;
//     do {
//     nameOf = prompt("Один из оследних просмотренных фильмов?", "");}
//     while ((nameOf == null) || (nameOf == "") || (nameOf.length > 50));
//     do {
//     score = prompt("На сколько оцените его?", "");}    
//     while (score == null || score == "");
//     personalMovieDB.movies[nameOf] = score; 
//     i++;  
// }

