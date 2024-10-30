function ContactUs() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  if (age > 18) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Thank you " + name + ", We will be in touch";
  } else {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Sorry " + name + ", you can not apply to SheCodes";
  }
}
let conatactButton = document.querySelector("button");
conatactButton.addEventListener("click", ContactUs);
