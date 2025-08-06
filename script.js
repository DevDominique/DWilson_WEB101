
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

/** Reduce Motion Button**/
let motionEnabled = true;

const toggleReduceMotion = () => {
  motionEnabled = !motionEnabled;

  const button = document.getElementById("reduce-motion");
  button.textContent = motionEnabled ? "Reduce Motion" : "Enable Motion";
};

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/

//create variables for the form button and rsvp counter
let rsvpButton = document.getElementById("rsvp-button");
let count = 3;

//write a function that adds participant to list + displays it with count
const addParticipant = (person) => {

    let newRSVP = document.createElement("p");
    newRSVP.textContent = `✅ ${person.name} from ${person.city} signed up!`;

    let rsvpList = document.querySelector(".rsvp-participants");
    rsvpList.appendChild(newRSVP);

    let rsvpCount = document.getElementById("rsvp-count");
    rsvpCount.remove();

    count = count + 1;

    let newCount = document.createElement("p");
    newCount.id = "rsvp-count";
    newCount.textContent = "✨So far " + count + " RSVPs — the circle is forming beautifully! Are you next?";

    document.querySelector(".rsvp-participants").appendChild(newCount);
};


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
  
  let person = {
    name: rsvpInputs[0].value,
    city: rsvpInputs[1].value,
    email: rsvpInputs[2].value,
    phone: rsvpInputs[3].value
  }

  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    let input = rsvpInputs[i];

    // TODO: Inside loop, validate the value of each input
    
    //exclude submit button from error styling
    if(input.type === "submit" || input.type === "button") {
      continue;
    }
    
    //if(input.value.length < 2) {
    if(person.name.length < 2 || person.city.length < 2) {
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
    addParticipant(person);
    toggleModal(person)

    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
let form = document.getElementById("rsvp-form");
form.addEventListener("submit", validateForm);

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  let modal = document.getElementById("success-modal");
  let modalText = document.getElementById("modal-text");
  
  // TODO: Update modal display to flex
  modal.style.display = "flex";

  // TODO: Update modal text to personalized message
  modalText.innerHTML = `
  <p>Thank you for signing up, ${person.name}! We look forward to seeing you at the meeting!</p>
  <button id="modal-close">Close</button>
  `;

  //Add a 'close' button
  let exitModal = document.getElementById("modal-close");

  exitModal.addEventListener("click", () => {
    modal.style.display = "none";
    clearInterval(intervalId);
  });

  // Set modal timeout to 5 seconds
  let intervalId = setInterval(animateImage, 500); //animate image

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000);
  
};

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.getElementById("modal-anim");

const animateImage = () => {
  if (!motionEnabled) return;

  //rotateFactor = rotateFactor === 1 ? 0.8 : 1 [alternative ternary op JsES6]
  if(rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }

  //apply rF to image
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};


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

document.getElementById("reduce-motion").addEventListener("click", toggleReduceMotion);