var number = Math.floor(Math.random() * 11);
var fortune;
if (number >= 0 && number <= 3) {
  fortune = "You appear to have a bad fortune!";
} else if ((number > 3 && number <= 7)) {
  fortune = "You seem to have an average fortune! ";
} else {
  fortune = "You appear to have a good fortune!";
}
console.log("Your Fortune: " + fortune);