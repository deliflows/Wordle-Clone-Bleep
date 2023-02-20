<h1 align="center">
  <a href="https://wordle-clone-bleep.netlify.app)" rel="" target="_blank">BLEEP</a></p>
</h1>

<h2 align="center">A Five Letter Discover the Word Game</h2>

> Build Status:
Deployed@**[BLEEP](https://wordle-clone-bleep.netlify.app)**

## What is BLEEP?
I created this project in class to learn more about my favorite game, Wordle. The site is heavily designed with javascript. It includes all of the same features as Wordle: Grey tiles, yellow "almost" tiles, and green "success!" tiles.

## Inspiration
I play Wordle every day. And when I began coding, I wondered, "What goes into programming a site/game like this?" I got my answer. A lot of sneaky yet beautiful combination of algorithms that harmonize with each other.


## Quick Preview

<img src="https://media.giphy.com/media/qQQH5lCFyIrc4ZTTRX/giphy.gif" alt="View of Website"/>

## Features
- Expansive array of randomly generated words
- Gray tiles to indicate the letter is not in the solution
- Yellow tiles to indicate the letter is in the solution, but incorrect place
- Green tiles to indicate the letter is in the solution, and in the correct place
- Pop up saying "Congratulations!" when the word is correct

## Technical Framework Usage:
- HTML
- JavaScript

## Code Framework Style
- Custom Styled Components

  <h4>Components for Main Page:</h4>
  
  Landing Page
  -----------------
  Keyboard
  Empty tiles
  Congratulations Pop Up


## Current Goals

- [x] Host the site on Netlify
- [ ] Expand list of possible words
- [ ] Exclude words that are not words
- [ ] Prompt when a word is too short
- [ ] Create a user and record their data
- [ ] Add a how to play the game section

## Challenges
- Time managing with less than two(2) weeks to complete. 
- Writing logic for correct letters in the wrong spot (Yellow Tiles)

## Triumphs
- Created site with 1-month of traning from Digital Crafts BootCamp
- Completing the project solo

## Code Example Extraction

Checking for a perfect matched word:
```
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
```

Accreditation:
- Full-Stack Developer:[Betty Lee Carter](https://github.com/deliflows) Ideation, Front-End, Deployment, ReadMe-file.

## The End.
