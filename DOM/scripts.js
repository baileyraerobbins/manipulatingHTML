// 1. Create button in DOM & alert with nice message
let button = document.createElement("button");
let buttonText = document.createTextNode("Submit");
button.appendChild(buttonText);
document.body.appendChild(button);
button.addEventListener("click", function () {
    alert("Thank you for clicking this button using DOM.");

})

//2. Display alert on button click with message from text box
let btnAlert = document.querySelector("button");
btnAlert.addEventListener("click", function () {
    let textField = document.getElementById("msgAlert").value;
    alert(textField);
});

//3. Change color of div to different background color with mouse hover, should return to original color on mouse exit
let div = document.querySelector(".square");
div.addEventListener("mouseenter", hover);
function hover() {
    div.style.backgroundColor = "lightcoral";
}

div.addEventListener("mouseleave", noHover);
function noHover() {
    div.style.backgroundColor = "purple";
}

//4. Create paragraph and change colors with each click
let p = document.createElement("p");
let paragraph = document.createTextNode("Click on the text to see its colors change before your eyes.");
p.appendChild(paragraph);
document.body.appendChild(p);

p.addEventListener("click", function () {
    let colors = [
        "darkslateblue",
        "aquamarine",
        "mediumvioletred",
        "palevioletred",
        "mediumslateblue",
        "darkmagenta"
    ];
    let random = Math.floor(Math.random() * colors.length);
    p.style.color = colors[random];
})

//5. Add a button & empty div. Add <span> with button click that contains your name
let spanDiv = document.createElement("div");
spanDiv.className = "spanDiv"
document.body.appendChild(spanDiv);

let spanBtn = document.createElement("button");
let spanText = document.createTextNode("Click to View My Name");
spanBtn.appendChild(spanText);
spanDiv.appendChild(spanBtn);

spanBtn.addEventListener("click", function () {
    let spanText = document.createElement("span");
    let textParagraph = document.createTextNode(" Bailey Robbins ");
    spanText.appendChild(textParagraph);

    spanDiv.appendChild(spanText);
});

//6. Create an array containing the names of your friends (at least 10. When the button is clicked, add each friend's name as an li to the ul on the page.
let liButton = document.querySelector(".addLi");
let counter = 0;
let friends = [
    "Mike",
    "Rachel",
    "Victoria",
    "Bridget",
    "Hunter",
    "Gabe",
    "Marleigh",
    "Greg",
    "Brent",
    "Dani"
];

liButton.addEventListener("click", function () {
    let item = document.createElement("li");
    let list = document.querySelector(".list");
    let myMath = friends[counter % friends.length];

    list.appendChild(item);
    item.innerText = myMath;
    counter++;
});
