// let theTiles = document.querySelectorAll(".board-row div");
let theRow = document.querySelectorAll(".board-row");
let theKeyboard = document.querySelectorAll(".row div");
let theEnterButton = document.querySelector("#submit");
let correct = document.querySelector(".correct");
//  "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "agora", "aroma", "caulk", "shake", "pupal", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch"];
let theWords = [
  "CIGAR",
  "REBUT",
  "SISSY",
  "HUMPH",
  "AWAKE",
  "BLUSH",
  "FOCAL",
  "EVADE",
  "NAVAL",
  "SERVE",
  "HEATH",
  "DWARF",
  "MODEL",
  "KARMA",
  "STINK",
  "GRADE",
  "QUIET",
  "BENCH",
  "ABATE",
  "FEIGN",
  "SPELL",
  "MAJOR",
  "DEATH",
  "FRESH",
  "CRUST",
  "STOOL",
  "COLOR",
  "MARRY",
  "REACT",
  "BATTY",
  "PRIDE",
  "FLOSS",
  "HELIX",
  "CROAK",
  "STAFF",
  "PAPER",
  "LLAMA",
  "UNFED",
  "WHELP",
  "TRAWL",
  "OUTDO",
  "ADOBE",
  "CRAZY",
  "SOWER",
  "REPAY",
  "DIGIT",
  "CRATE",
  "CLUCK",
  "SPIKE",
  "MIMIC",
  "POUND",
  "MAXIM",
  "LINEN",
  "UNMET",
  "FLESH",
  "FORTH",
  "FIRST",
  "STAND",
  "BELLY",
  "IVORY",
  "SEEDY",
  "PRINT",
  "YEARN",
  "DRAIN",
  "BRIBE",
  "STOUT",
  "PANEL",
  "CRASS",
  "FLUME",
  "AWFUL",
  "AGREE",
  "ERROR",
  "SWIRL",
  "ARGUE",
  "BLEED",
  "DELTA",
  "FLICK",
  "TOTEM",
  "FRONT",
  "SPACE",
  "SHRUB",
  "PARRY",
  "BIOME",
  "LABEL",
  "START",
  "GREET",
  "GONER",
  "GOLEM",
  "LUSTY",
  "LOOPY",
  "ROUND",
  "AUDIT",
  "LYING",
  "GAMMA",
  "LABOR",
  "ISLES",
  "CIVIC",
  "FORGE",
  "CORNY",
  "MOULD",
  "BASIC",
  "SALAD",
  "AGATE",
  "SPICY",
  "SPRAY",
  "ESSAY",
  "FJORD",
  "SPEND",
  "KEBAB",
  "GUILD",
  "ABACK",
  "MOTOR",
  "ALONE",
  "HATCH",
  "HYPER",
  "THUMB",
  "IRATE",
  "AUDIO",
  "OUGHT",
  "HASTE",
  "CLICK",
  "ALTAR",
  "PULPY",
  "BLURT",
  "COAST",
  "GROIN",
  "PILOT",
  "JAUNT",
  "ABYSS",
  "DOZEN",
  "FLING",
  "ERODE",
  "WORLD",
  "GAUDY",
  "CHILL",
  "HERON",
  "VODKA",
  "FINER",
  "SURER",
  "RADIO",
  "ROUGE",
  "PERCH",
  "RETCH",
  "WROTE",
  "CLOCK",
  "STORE",
  "PROVE",
  "GRIME",
  "BRING",
  "SOLVE",
  "CHEAT",
  "EXULT",
  "USHER",
  "TRIAD",
  "BREAK",
  "RHINO",
  "VIRAL",
  "VITAL",
  "TRACE",
  "PEACH",
  "CHAMP",
  "SOLAR",
  "AROMA",
];
let hiddenWord = theWords[Math.floor(Math.random() * theWords.length)];
console.log(hiddenWord);
let theirWord = "";
let theCurrentRow = 0;
let theCurrentLetter = 0;
let remainingCorrect = [];

//This calls each div of the keyboard
for (let theButton of theKeyboard) {
  theButton.addEventListener("click", function (event) {
    //Setting conditionals for the button inner text of enter, and length of word
    if (event.target.innerText == "ENTER" && theirWord.length == 5) {
      //Calls the nested function to screen their word
      CheckLetters();
      //Then resets the letter count to zero
      theCurrentLetter = 0;
      //But, we still want to skip to the next row;
      theCurrentRow++;
      //Resets their word to an empty string, so that they can enter the next word. CLEAN SLATE
      theirWord = "";
    }
    //This controls the back button. Also makes sure that their word length is greater than one letter
    else if (event.target.innerText == "BACK" && theirWord.length > 0) {
      //Go backwards along the letters
      theCurrentLetter--;
      //Their word minus a letter would be the first index and the whole index minus one
      //notice that you have to go backwards along the letters BEFORE you can alter the word
      theirWord = theirWord.slice(0, theirWord.length - 1);
      //Reset that block to an empty string
      theRow[theCurrentRow].children[theCurrentLetter].innerText = "";
    }
    //if their word is five letters long, they hit enter, and they do not hit back, then we can add their word to the divs
    else if (
      theirWord.length < 5 &&
      event.target.innerText != "ENTER" &&
      event.target.innerText != "BACK"
    ) {
      //Adding the button's inner text to their word
      theirWord += theButton.innerText;
      //adding "their word", or the button inner text to each tile along the row
      theRow[theCurrentRow].children[theCurrentLetter].innerText =
        theButton.innerText;
      //Actually going through the row, letter by letter
      theCurrentLetter++;
    }
  });
}
//Function for the perfect match to the hidden word
function CheckPerfect() {
  //going through the index of the hidden word and comparing it to their word
  for (i = 0; i < hiddenWord.length; i++) {
    if (hiddenWord[i] == theirWord[i]) {
      //if it is a perfect match, then we assign it a correct class
      theRow[theCurrentRow].children[i].className = "correct";
    } else {
      //Else, we save the remaining perfect letters
      remainingCorrect.push(hiddenWord[i]);
    }
  }
  if (hiddenWord == theirWord) {
    alert("Congratulations! You win!");
  }
}
// Check the rest of the letters against their word
function CheckRest() {
  //Add a variable inside the function to the top of the function
  let theIndex;
  //GO THROUGH THE INDEX OF THEIR WORD
  for (i = 0; i < theirWord.length; i++) {
    //Only compare the remaining words against letters in their word that do not have a class of "correct";
    if (theRow[theCurrentRow].children[i].className != "correct") {
      if (remainingCorrect.includes(theirWord[i])) {
        //If some of their letters are found in the remaining correct letters, assign it an "almost" class
        theRow[theCurrentRow].children[i].className = "almost";
        //Index of returns a -1 if it is not found, any other number will be sliced out of the remaining correct.
        //This works, because the function will loop through the rest of their word, whittling down the remaining letters
        //until they all match
        theIndex = remainingCorrect.indexOf(theirWord[i]);
        remainingCorrect.splice(theIndex);
      }
      //end the loop by assigning all other letters "absent"
      else {
        theRow[theCurrentRow].children[i].className = "absent";
      }
    }
  }
}
//Nested function. Just a function with the name of the other two functions inside it.
function CheckLetters() {
  //After looping through a row, it automatiically resets the remaining letter array to zero
  remainingCorrect = [];
  CheckPerfect();
  CheckRest();
}
//This alert is not in the right spot :(
// if(hiddenWord == theirWord){
//     alert("Congratulations! You win!");
// }

//if not, prompt that there is not enough letters EXTRA
//if there are five letters, determine if it is a valid word. EXTRA

// if their guess = valid || their guess.length = 5
