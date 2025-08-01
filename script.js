
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

//create variables for the form button and rsvp counter
let rsvpButton = document.getElementById("rsvp-button");
let count = 3;

//write a function that adds participant to list + displays it with count
const addParticipant = (event) => {

    let nameInput = document.getElementById("name").value;
    let cityInput = document.getElementById("city").value;

    let newRSVP = document.createElement("p");
    newRSVP.textContent = `📖 ${nameInput} from ${cityInput} signed up!`;

    let rsvpList = document.querySelector(".rsvp-participants");
    rsvpList.appendChild(newRSVP);

    let rsvpCount = document.getElementById("rsvp-count");
    rsvpCount.remove();

    count = count + 1;

    let newCount = document.createElement("p");
    newCount.id = "rsvp-count";
    newCount.textContent = "✨We’ve got " + count + " RSVPs — the circle is forming beautifully. Are you next?";

    document.querySelector(".rsvp-participants").appendChild(newCount);
};

//add click event to form submit button to add participant to list on submit
//Deleted event listener
// rsvpButton.addEventListener("click", addParticipant);

/*** Form Validation ***  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  
  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;

  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    let input = rsvpInputs[i];

    // TODO: Inside loop, validate the value of each input
    
    //exclude submit button from error styling
    if(input.type === "submit" || input.type === "button") {
      continue;
    }
    
    if(input.value.length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }
  //Stretch: Email Validation

  //create variable for email input from form
  let emailInput = document.getElementById("email");

  //if it doesn't include both "@" AND "." for domain then flag it as an error
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    containsErrors = true;
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }

  // TODO: If no errors, call addParticipant() and clear fields
  if(containsErrors === false) {
    addParticipant(event);

    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
let form = document.getElementById("rsvp-form");
form.addEventListener("submit", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

//document.addEventListener("DOMContentLoaded", function () {

/***Carousel Funtionality for "Event Schedule" Section */

//Select carousel container and buttons
const carousel = document.querySelector('.event-carousel');
const leftBtn = document.querySelector('.carousel-btn-left');
const rightBtn = document.querySelector('.carousel-btn-right');

//Define scroll amt based on card width and gap
const cardWidth = 300 + 32;
const scrollAmount = cardWidth * 3;

//Add scroll behavior to btns
leftBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, bahavior:'smooth' });
});

rightBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, bahavior:'smooth' });
});