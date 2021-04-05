'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Дедпул",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Дракула"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;

        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log('add new favorite film');
            }
            movieDB.movies.push(newFilm);
            createMovieList(movieDB.movies, movieList);
            event.target.reset();
        }


        sortArr(movieDB.movies);
    });
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();

        });

    };
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    const sortArr = (arr) => {
        arr.sort();
    };
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((films, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${films}
            <div class="delete"></div>
        </li> `;

        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });


        });
    }

    makeChanges();
    deleteAdv(adv);

    createMovieList(movieDB.movies, movieList);

});



