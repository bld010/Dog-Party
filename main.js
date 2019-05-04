var newDogName = document.querySelector("#dogName");
var span = document.querySelector("#changing-text");
var button = document.querySelector("#myButton");

button.addEventListener("click", changeName);


function changeName(e){
  span.innerHTML = newDogName.value;
  e.preventDefault(); 
  newDogName.value = "";
}

