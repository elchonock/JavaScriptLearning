'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    
// variables
    const adv = document.querySelectorAll(".promo__adv *");
    const genre = document.querySelector(".promo__genre");
    const posterBG = document.querySelector(".promo__bg");
    const listOfMovies = document.querySelector(".promo__interactive-list");
    const addMovieForm = document.querySelector("form.add");
    let inputValue = addMovieForm.querySelector(".adding__input");
    const favChekbox = addMovieForm.querySelector("input[type='checkbox']");


// functions
    const deleteAdv = (array) => {
        array.forEach(item=>{item.remove();});
    };


    const makeChanges = () => {
        genre.textContent = "драма";    
        posterBG.style.background = "url('img/bg.jpg')";
    };
 

    const sortArray = (array) => {
        array.sort();
    };

    
    function createMovieList(movies, parent) {
        parent.innerHTML = "";
        sortArray(movies);
        movies.forEach((item, i)=>{
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll(".delete").forEach((busket, index) => {
            busket.addEventListener("click", (event) => {
                busket.parentElement.remove();
                movieDB.movies.splice(index, 1);
                createMovieList(movies, parent);
            });
        });
    }
 

 // form functional
    addMovieForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newMovie = inputValue.value;
        if (favChekbox.checked) {
            alert("Добавляем любимый фильм");
        }
        if (newMovie) {
            if (newMovie.length > 21) {
                newMovie = `${newMovie.slice(0, 21)}...`;
            }
            movieDB.movies.push(newMovie);
            createMovieList(movieDB.movies, listOfMovies);
        }

        event.target.reset(); // обнуляет форму

    });


// functions call
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, listOfMovies);

});

