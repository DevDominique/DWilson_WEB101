
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
let rsvpButton = document.getElementById("rsvp-button");

const addParticipant = (event) => {
    event.preventDefault();

    let nameInput = document.getElementById("name").value;
    let cityInput = document.getElementById("city").value;

    let newRSVP = document.createElement("p");
    newRSVP.textContent = `👑 ${nameInput} from ${cityInput} signed up!`;

    let rsvpList = document.querySelector(".rsvp-participants");
    rsvpList.appendChild(newRSVP);

    // const revpCount = rsvpList.querySelectorAll("p").length;
    // const countMessage = document.createElement("p");
    // countMessage.id = "rsvp-count";
    // countMessage.textContent = `⭐ ${rsvpCount} people have RSVP'd to this event!`;
    // rsvpList.appendChild(countMessage);

};

rsvpButton.addEventListener("click", addParticipant);


const form = document.getElementById("rsvp-form");

const printReceipt = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = `Thank you, ${name}! We will send you a reminder a few days before we meet!`;
    

    const confirmationDiv = document.getElementById("confirmationMessage");
    confirmationDiv.textContent = message;

};

form.addEventListener("submit", printReceipt);

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
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs

  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

//document.addEventListener("DOMContentLoaded", function () {
