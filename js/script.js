const numberOfFilms = +prompt ('Скільки фільмів Ви вже переглянули?'  , '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?' , ''),
    b = prompt('Яку ви поставите оцінку фільмові' , ''),
    c = prompt('Один з останніх переглянутих фільмів?' , ''),
    d = prompt('Яку ви поставите оцінку фільмові' , '');
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
    console.log(personalMovieDB);

