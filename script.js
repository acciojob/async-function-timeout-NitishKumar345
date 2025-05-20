//your JS code here. If required.
 
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

 
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

 
async function handleClick() {
  const message = textInput.value;
  const delay = parseInt(delayInput.value);

  outputDiv.textContent = "";

  if (isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter a valid positive delay in milliseconds.";
    return;
  }

  await wait(delay);

  outputDiv.textContent = message;
}

button.addEventListener("click", handleClick);
