console.log("Hello World");

// we target the html button element 

//html elements related to the text
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");
// html elements related to the color
let buttonColor = document.querySelector("#button-color");
let inputColor = document.querySelector("#input-color");
//html element related to the target
let target = document.querySelector("#target");

console.log(button);

//we listen to the click event on the button
button.addEventListener("click", function() {
    //and then we do stuff
    console.log(inputName.value);
    //we replace the content of the traget
    //with the one form the input
    target.innerHTML = inputName.value;
})

//we listen to the click  on the color button
buttonColor.addEventListener("click", function() {
    //we get the color value 
    //we update the title color 
    target.style.color = inputColor.value;
})


/*
    #####################################

                TO DO LIST

    #####################################
*/

//1- create the link to the html elements
let buttonToDo = document.querySelector("#toDoButton")
let inputToDo = document.querySelector("#toDoInput");
let toDo=document.querySelector("#toDo");

// 2 - listen to the click on the button
buttonToDo.addEventListener("click", function() {
    // 3 - get the value of the input
    let currentToDo = inputToDo.value;
    // 4- we create a list element
    // we use the backticks ``to create a template 
    // within a litteral template we can mix html and js
    let newLiElement=`<li>${currentToDo}</li>`;
    //5 we add it inside the ul element
    toDo.innerHTML += newLiElement;
})