function hello() {
  console.log("Hello word");
}
hello();

function helloSomeone(text = "") {
  console.log("Bonjour " + text);
}
helloSomeone("fifi");

function helloSomeoneinUppercase(text = "") {
  console.log("Bonjour " + text.toUpperCase());
}
helloSomeoneinUppercase("loulou");

function helloSomeoneInCapitalize(text = "") {
  text = text.toLowerCase();
  console.log("Bonjour " + text[0].toUpperCase() + text.substring(1));
}
helloSomeoneInCapitalize("PICSOU");
