// 1. Create button in jQ & alert with nice message
$('<button>Click Me to See an Alert</button>').appendTo('body').addClass("btnAlert");
$('.btnAlert').click(function () {
    alert('Hi, you clicked this button using jQuery. Keep at it.')
})
//2. Display alert on button click with message from text box
$('.aletTextBtn').click(function () {
    let textVal = $('.textField').val();
    alert(textVal);
});
//3. Change color of div to different background color with mouse hover, should return to original color on mouse exit
$('.colorDiv').hover(function () {
    $(this).css('background-color', 'pink');
}, function () {
    $(this).css('background-color', 'mediumaquamarine');
});
//4. Create paragraph and change colors with each click
$('<p>Click this paragraph to change its colors.</p>').appendTo('body').addClass('newParagraph');
$('.newParagraph').click(function () {
    let colors = [
        "darkslateblue",
        "aquamarine",
        "mediumvioletred",
        "palevioletred",
        "mediumslateblue",
        "darkmagenta"
    ];
    let random = Math.floor(Math.random() * colors.length);

    $(this).css('color', colors[random]);
})
//5. Add a button & empty div. Add <span> with button click that contains your name
$('<div></div').appendTo('body').addClass('nameDiv');
$('<button>Click to Learn My Name</button>').appendTo('.nameDiv').addClass("spanBtn");
$('.spanBtn').click(function () {
    $('<span> Bailey Robbins </span>').appendTo('.nameDiv');
})

//6. Create an array containing the names of your friends (at least 10. When the button is clicked, add each friend's name as an li to the ul on the page.
let friends = [
    "Mike",
    "Rachel",
    "Abbey",
    "Bridget",
    "Hunter",
    "Gabe",
    "Marleigh",
    "Dom",
    "Brent",
    "Dani"
];

let counter = 0;
$('.friendsBtn').click(function () {
    let myMath = friends[counter % friends.length];
    let myFriends = '<li>' + myMath + '</li>';
    $(myFriends).appendTo('.friendsList');
    counter++
})