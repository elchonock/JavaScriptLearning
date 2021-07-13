"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     let nameOf, score;
//     do {
//     nameOf = prompt("Один из оследних просмотренных фильмов?", "");}
//     while ((nameOf == null) || (nameOf == "") || (nameOf.length > 50));
//     do {
//     score = prompt("На сколько оцените его?", "");}    
//     while (score == null || score == "");
//     personalMovieDB.movies[nameOf] = score;   
// }


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

let i = 0;
while (i < 2) {
    let nameOf, score;
    do {
    nameOf = prompt("Один из оследних просмотренных фильмов?", "");}
    while ((nameOf == null) || (nameOf == "") || (nameOf.length > 50));
    do {
    score = prompt("На сколько оцените его?", "");}    
    while (score == null || score == "");
    personalMovieDB.movies[nameOf] = score; 
    i++;  
}


(personalMovieDB.count < 10) ? alert("Просмотрено довольно мало фильмов") : 
((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) ? 
alert("Вы классический зритель") : (personalMovieDB.count > 30) ? 
alert("Вы киноман"): alert("Произошла ошибка");

console.log(personalMovieDB);

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log("Main project: ");
        console.log(personalMovieDB);
        
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} ?`, "");
    }
    console.log(personalMovieDB.genres);

}

writeYourGenres();

console.log(personalMovieDB);




