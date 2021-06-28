let weather = {
    apiKey: "2e13a7d6",
    fetchWeather: function (title) {
      fetch(
        "http://www.omdbapi.com/?t=" +
          title +
          "&apikey=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            // alert("No Movie found.");
            // throw new Error("Oops No movie found");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const  Title  = data.Title;
      const  date = data.Released;
      const  direct = data.Director;
      const  lang = data.Language;
      const  award = data.Awards;
      const  rate = data.imdbRating;
      const  box = data.BoxOffice;
      const  prod = data.Production;

      const  poster = data.Poster;
        document.querySelector(".title").innerText = "Movie Name : " + Title;
        document.querySelector(".year").innerText = "Relase Date : " + date;
        document.querySelector(".direct").innerText = "Director Name : " + direct;
        document.querySelector(".lang").innerText = "Language : " + lang;
        document.querySelector(".award").innerText = "Awards : " + award;
        document.querySelector(".rate").innerText = "IMDB Rating : " + rate;
        document.querySelector(".box").innerText = "Box office : " + box;
        document.querySelector(".prod").innerText = "Production : " + prod;
        document.body.style.backgroundImage = "url("+ poster+ ")";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        

    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    console.log('running');
    weather.search();
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
