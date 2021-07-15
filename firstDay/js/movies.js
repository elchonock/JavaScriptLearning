"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");}
    },
    rememberMyMovies: () => {
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
    },
    detectPersonalLevel: () => {
        (personalMovieDB.count < 10) ? alert("Просмотрено довольно мало фильмов") : 
        ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) ? 
        alert("Вы классический зритель") : (personalMovieDB.count > 30) ? 
        alert("Вы киноман"): alert("Произошла ошибка");
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 1; i++) {
            let favGenre = prompt(`Введите ваши любимые жанры через запятую: `, "").toLowerCase();
            (!favGenre) ? ( i--) : (personalMovieDB.genres = favGenre.split(","));
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Favorit genre №${index + 1} - is ${item}`);
        });
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
};

