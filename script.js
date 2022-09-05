let normalizedMovies = [];
movies.forEach((movie) => {
  normalizedMovies.push({
    title: movie.Title,
    fullTitle: movie.fulltitle,
    categories: movie.Categories,
    summary: movie.summary,
    language: movie.language,
    youtube: `https://www.youtube.com/embed/${movie.ytid}`,
    imgHD: `https://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`,
  })
})
let elMoviesList = $(".js-movies-list");
let elNormalizedMoviesTemplate = $("#template-movies-element").content;
let elForm = $(".js-form");
let elInput = $(".input",);

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();  
  
  elMoviesList.innerHTML = "";

  let searchMovie = new RegExp(elInput.value, 'gi');
    
  const resultMovies = normalizedMovies.filter((resultMovie) => {
    return resultMovie.fullTitle.match(searchMovie)
  })
  
  let createMovieElement = (resultMovie) => {
    let elNewNormalizedMovies = elNormalizedMoviesTemplate.cloneNode(true);

    elNewNormalizedMovies.querySelector(".card-link").href = resultMovie.youtube;
    elNewNormalizedMovies.querySelector(".card-img").alt = resultMovie.title;
    elNewNormalizedMovies.querySelector(".card-img").src = resultMovie.imgHD;

    elNewNormalizedMovies.querySelector(".card-title").textContent = resultMovie.fullTitle;

    elNewNormalizedMovies.querySelector(".card-text").textContent = resultMovie.categories;

    elNewNormalizedMovies.querySelector(".modal-body").textContent = resultMovie.summary;

    return elNewNormalizedMovies;
  }


  let renderPokemons = (resultMovies) => {
    let elnormalizedMoviesWrapperFragment = document.createDocumentFragment();

    resultMovies.forEach((resultMovie) => {
      elnormalizedMoviesWrapperFragment.appendChild(createMovieElement(resultMovie));
    })
    elMoviesList.appendChild(elnormalizedMoviesWrapperFragment);
  }
  renderPokemons(resultMovies);
});



let elButton = $(".js-button");
let history = [];

elButton.addEventListener('change', function(evt){
  let elinputVall = elInput.value;
  elInput.value = '';
  bozorlikRoyhati.push(elinputVall);
  localStorage.setItem('bozorlik', bozorlikRoyhati);

  let boom = localStorage.getItem('bozorlik');

  elResult.innerHTML = '';
  let li = document.createElement("li")
  li.textContent = boom
  li.classList.add('text-light')
  elResult.appendChild(li)
})