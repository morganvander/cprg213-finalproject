// when the "submit-button" is clicked,
//the contents of the contact-page are replaced with a
//single <p> element that reads "Thank you for your message" in size 24 font.

let submit_button = document.getElementById("submit-button");
submit_button.addEventListener("click", submit_button_hit);

let page = document.getElementById("contact-page");

function submit_button_hit() {
  page.innerHTML =
    '<main class="contact large-text" id="contact-page"><p>Thank you for your message!</p></main>';
}

// hint: you can change the style of an element by
//modifying the value of that element's .style.fontSize,
//or by updating its .classList.
