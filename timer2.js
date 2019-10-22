// Completed by pair programming between Sam Rush and Chris Mastel
// The program waits for a user input, and sets
// a timer for the computer to "beep" at those intervals (in seconds)
// 'b' --> beeps right away
// 1 to 9 --> sets a timer for that many seconds
// Ctrl+C exits the program

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// wait for user input
stdin.on('data', (key) => {
  // if ctrl+c, thank the user and exit
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  }
  
  // if 'b', beep immediately
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // for any number between 1 and 9, set a timer for that many seconds
  if (key > 0 && key < 10) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');;
    }, key * 1000); // adds the delay in seconds
  }
});