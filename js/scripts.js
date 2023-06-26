let searchBtn = document.getElementById("search-btn");
let characterInp = document.getElementById("character-inp");

searchBtn.addEventListener("click", () => {
  let characterName = characterInp.value;
  let zeldaAPI = `https://zelda.fanapis.com/api/characters?name=${characterName}`;
  console.log(zeldaAPI);
  fetch(zeldaAPI)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data[0]);
      console.log(data.data[0].name);
      console.log(data.data[0].description);
      console.log(data.data[0].gender);
      console.log(data.data[0].race);
      result.innerHTML = `
      <h2>${data.data[0].name}</h2>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Description:</h4>
      <span>${data.data[0].description}</span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Gender:</h4>
      <span>${data.data[0].gender}</span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Race:</h4>
      <span>${data.data[0].race}</span>
      </div>
      </div>
      `;
    });
});
