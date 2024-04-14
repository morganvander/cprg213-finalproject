/********* create variables *********/
// useful variables might be: the cost per day, the number of days
// selected, and elements on the screen that will be clicked or will
// need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let cost_per_day = 0;
let number_of_days = 0;
let type_of_day = "full"; // either half or full
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

let half_day_button = document.getElementById("half");
let full_day_button = document.getElementById("full");

let clear_button = document.getElementById("clear-button");
let daily_rate = 0;
let calculated_cost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked"
// class to that element, and update any other relevant variables.
// Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is
// clicked more than once. hint: .classList.contains() might be helpful here!

function click_day() {
  if (!this.classList.contains("clicked")) {
    this.className += " clicked";
    number_of_days += 1;
    calculate();
  }
}

monday.addEventListener("click", click_day);
tuesday.addEventListener("click", click_day);
wednesday.addEventListener("click", click_day);
thursday.addEventListener("click", click_day);
friday.addEventListener("click", click_day);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed
//from all days, any other relevant variables are reset, and the
//calculated cost is set to 0.

clear_button.addEventListener("click", clear);

function clear() {
  monday.className = "blue-hover";
  tuesday.className = "blue-hover";
  wednesday.className = "blue-hover";
  thursday.className = "blue-hover";
  friday.className = "blue-hover";
  cost_per_day = 0;
  number_of_days = 0;
  select_full();
  calculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20,
//add the "clicked" class to the "half" element, remove it from the
//"full" element, and recalculate the total cost.

half_day_button.addEventListener("click", select_half);

function select_half() {
  daily_rate = 20;
  half_day_button.className = "clicked small-button blue-hover";
  full_day_button.className = "small-button blue-hover";
  calculate();
}

// when the full-day button is clicked, the daily rate is set back
//to $35, the clicked class is added to "full" and removed from "half",
//and the total cost is recalculated.

full_day_button.addEventListener("click", select_full);

function select_full() {
  daily_rate = 35;
  half_day_button.className = "small-button blue-hover";
  full_day_button.className = "clicked small-button blue-hover";
  calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost
//element to the appropriate value

function calculate() {
  cost_per_day = number_of_days * daily_rate;
  calculated_cost.innerHTML = cost_per_day;
}
