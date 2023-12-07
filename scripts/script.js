// make hamburger menu icon turn into X and expand menu

//grab the button and menu block
const nav_btn = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.mobile-nav');

// add classes to toggle
nav_btn.addEventListener('click', function () {
    nav_btn.classList.toggle('is-active');
    nav_menu.classList.toggle('is-active');
})





//CALCULATOR

// Convert Fahrenheit (F) to Celsius (C)
function convertFahr () {
    //fetch value from input (parsInt makes the string a number)
    const fer = parseInt(document.querySelector('#userInput').value);

    // plug in Fahrenheit (F) to Celsius (C) conversion formula
    const cels = (fer - 32) * 0.5556;
    console.log(cels);

    //display the number
    document.getElementById('result').innerText = cels + " C";
}

// Convert Feet (ft) to Miles (mi)
function convertFeet () {
    //fetch value from input (parsInt makes the string a number)
    const feet = parseInt(document.querySelector('#userInput').value);

    //plug in Feet (ft) to Miles (mi) conversion formula
    const miles = feet * 0.0001894;
    console.log(miles);

    //display the number
    document.getElementById('result').innerText = miles + " mi";
}

// Convert Inches (in) to Centimeters (cm)
function convertInch () {
    //fetch value from input (parsInt makes the string a number)
    const inch = parseInt(document.querySelector('#userInput').value);

    //plug in Inches (in) to Centimeters (cm) conversion formula
    const centimeters = inch * 2.54;
    console.log(centimeters);

    //display the number
    document.getElementById('result').innerText = centimeters + " cm";
}




//Dark and light mode


//target the button
const darkMode = document.querySelector('.dark-light');
//target the body
const body = document.querySelector('#change-lighting');

// create button function
darkMode.addEventListener('click', function () {

    //change colors
    body.classList.toggle('body');

})