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
//target the text
const text = document.querySelectorAll('p');
const text2 = document.querySelectorAll('dl');
//target nav
const nav = document.querySelector('.flex-row');
//target footer
const footer = document.querySelector('.footer');

darkMode.addEventListener('click', function () {

    //change nav color 
    nav.classList.toggle('nav-dark');

    //change background color
    body.classList.toggle('body-dark');

    //change footer color
    footer.classList.toggle('footer-dark');

    //change text color
    text[0].classList.toggle('text-dark');
    text[1].classList.toggle('text-dark');
    text[2].classList.toggle('text-dark');
    text[3].classList.toggle('text-dark');
    text[4].classList.toggle('text-dark');
    text[5].classList.toggle('text-dark');

    //change dl color
    text2[0].classList.toggle('text-dark');

})