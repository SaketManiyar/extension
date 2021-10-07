function showMeaning() {
  let query = document.getElementById("type_word").value;
//   document.getElementById("type_word").value = "";
  {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      .then((data) => data.json())
      .then((e) => {
        for (let i = 0; i < e[0].meanings.length; i++) {
          let liElement = document.createElement("li");
          document.getElementById("root").appendChild(liElement);
          liElement.innerHTML = e[0].meanings[i].definitions[0].definition;
        }
      });
      
  }
  
}
document.querySelector("button").addEventListener("click", showMeaning);

