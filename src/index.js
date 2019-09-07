let longText = document.querySelector("#longText");
let shortText = document.querySelector("#shortText");
let result = document.querySelector("#result");

shortText.addEventListener("keypress", function() {
  let match = longText.value.indexOf(shortText.value);

  if (match === -1) {
    result.innerHTML = `The value ${shortText.value} was not found`;
  } else {
    result.innerHTML = `The value ${shortText.value} was found at ${match}`;
  }
});
