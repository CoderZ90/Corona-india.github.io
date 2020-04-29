//API COD
// fetch("https://covid19india.p.rapidapi.com/getIndiaStateData", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "covid19india.p.rapidapi.com",
//     "x-rapidapi-key": "f1d7dbf46amsh2d7deb02d57fbedp1eb28ajsn22f3d32b7b04"
//   }
// })
var mainData;
var totalConfirmed = 0;
var totalActive = 0;
var totalRecovered = 0;
var totalDeaths = 0;
fetch("https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-tracker-india-covid-19.p.rapidapi.com",
		"x-rapidapi-key": "f1d7dbf46amsh2d7deb02d57fbedp1eb28ajsn22f3d32b7b04"
	}
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    mainData = data;
    console.log(mainData);
    var name = document.querySelector(".name");
    var active = document.querySelector(".active");
    var confirmed = document.querySelector(".confirmed");
    var recovered = document.querySelector(".recovered");
    var deaths = document.querySelector(".deaths");
    mainData.forEach(function (val) {
      if (val.name) {
        var nameCol = document.createElement("p");
        nameCol.innerHTML = "<p>" + val.name + "</p>";
        name.appendChild(nameCol);
        // var nameCol = document.createElement("p");
        // nameCol.innerHTML = "<p>" + val.active + "</p>";
        // active.appendChild(nameCol);
        var nameCol = document.createElement("p");
        nameCol.innerHTML = "<p>" + val.cases + "</p>";
        confirmed.appendChild(nameCol);
        var nameCol = document.createElement("p");
        nameCol.innerHTML = "<p>" + val.recovered + "</p>";
        recovered.appendChild(nameCol);
        var nameCol = document.createElement("p");
        nameCol.innerHTML = "<p>" + val.deaths + "</p>";
        deaths.appendChild(nameCol);

        totalConfirmed = totalConfirmed + parseInt(val.cases);
        // totalActive = totalActive + parseInt(val.active);
        totalRecovered = totalRecovered + parseInt(val.recovered);
        totalDeaths = totalDeaths + parseInt(val.deaths);
      }
    });
    document.querySelector(".confCount").innerHTML =
      "Confirmed: " + totalConfirmed;
    // document.querySelector(".actCount").innerHTML = "Active: " + totalActive;
    document.querySelector(".recCount").innerHTML =
      "Recovered: " + totalRecovered;
    document.querySelector(".deaCount").innerHTML = "Deaths: " + totalDeaths;
  })
  .catch((err) => {
    console.log(err);
  });


var darkButton = document.querySelector(".darkModeButton")
  darkButton.addEventListener("click",function(){  
  document.querySelector('.darkMode').classList.toggle("dark");
})