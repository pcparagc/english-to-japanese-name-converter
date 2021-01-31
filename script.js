const prompt = require("prompt-sync")();

let name = [];
let input = prompt("Enter you Name ");

function engTojapa(alphabet) {
  switch (alphabet) {
    case "a":
      return "ka";
      break;
    case "b":
      return "zu";
      break;

    case "c":
      return "mi";
      break;

    case "d":
      return "te";
      break;

    case "e":
      return "ku";
      break;

    case "f":
      return "lu";
      break;
    case "g":
      return "ji";
      break;
    case "h":
      return "ri";
      break;
    case "i":
      return "ki";
      break;
    case "j":
      return "zu";
      break;
    case "k":
      return "me";
      break;
    case "l":
      return "ta";
      break;
    case "m":
      return "rin";
      break;
    case "n":
      return "to";
      break;
    case "o":
      return "mo";
      break;
    case "p":
      return "no";
      break;
    case "q":
      return "ke";
      break;
    case "r":
      return "shi";
      break;
    case "s":
      return "ari";
      break;
    case "t":
      return "chi";
      break;

    case "u":
      return "do";
      break;
    case "v":
      return "ru";
      break;
    case "w":
      return "mei";
      break;
    case "x":
      return "na";
      break;
    case "y":
      return "fu";
      break;
    case "z":
      return "z";
      break;
    default:
      console.log("Oops..Something went wrong");
      break;
  }
}

if (typeof input != "string") {
  console.log("Kindly enter a valid Name");
} else {
  let name = input.toLowerCase().split("");
  let result = [];
  for (let i = 0; i < name.length; i++) {
    result += engTojapa(name[i]);
  }
  console.log(result);

  console.log(`Your name is japanese is: ${result}`);
}
