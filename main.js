var newDogName = document.querySelector("#dogName");
var span = document.querySelector("#changing-text");
var button = document.querySelector("#myButton");

button.addEventListener("click", function(){
  debugger;
  span.innerHTML = newDogName.value;
  e.preventDefault(); 
});

