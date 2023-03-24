function formatText() {
  var outerHTML = document.getElementById("input-text").value;

  if (outerHTML == "") {
    document.getElementById("output-text").innerHTML =
      "Please enter a valid input";
    return;
  }

  if (outerHTML[0] != "<") {
    document.getElementById(
      "output-text"
    ).innerHTML = `Outer HTML should start with "<span tittle="`;
    return;
  }

  var split = outerHTML.split(`"`);

  if (split.length < 2) {
    document.getElementById("output-text").innerHTML = "Invalid input";
    return;
  }

  var contacts = split[1];

  var parse = contacts.replace(/ |-|\(|\)/g, "");

  var parse2 = parse.replace(/\+/g, "https://wa.me/");

  document.getElementById("output-text").innerHTML = parse2;
}

function copyToClipboard() {
  var outputText = document.getElementById("output-text");
  outputText.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
