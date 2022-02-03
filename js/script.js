"use strict";
const numberOfFilms = +prompt("Сколько фильмов ви уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Done");
  } else {
    console.log("Error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log(alert("Просмотрено довольно мало фильмов"));
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log(alert("Вы классический зритель"));
} else if (personalMovieDB.count >= 30) {
  console.log(alert("Вы киноман"));
} else {
  console.log(alert("Произошла ошибка"));
}

console.log(personalMovieDB);
