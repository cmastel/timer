// Completed by pair programming between Sam Rush and Chris Mastel
// The program takes in arguments from the command line, and sets
// a timer for the computer to "beep" at those intervals (in seconds)

// creates an array of the desired beep intervals
const args = process.argv.slice(2);

// loop through the array, and setTimeout for each value
for (let num of args) {
  num = Number(num); // coerce the value to a number type
  if (num > 0 && (Number(num) !== NaN)) { // only continue the loop if the number is positive and isn't NaN
    setTimeout(() => {
      process.stdout.write('\x07');;
      console.log(num);
    }, num * 1000); // adds the delay in seconds
  }
  

}

