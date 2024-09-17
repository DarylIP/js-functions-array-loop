const character = "o"; // Define the character to be used in the pattern
const count = 4; // Define the total number of rows (or levels) for the pattern
const rows = []; // Array to store each row of the pattern
let inverted = true; // Flag to indicate if the pattern should be inverted (currently set to false)

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) + // Padding spaces on the left side
    character.repeat(2 * rowNumber - 1) + // Repeat the character based on the row number
    " ".repeat(rowCount - rowNumber) // Padding spaces on the right side
  );
}

// Loop to generate all the rows
for (let i = 1; i <= count; i++) {
  if (inverted) {
    // If the pattern is inverted, add each row to the beginning of the array
    rows.unshift(padRow(i, count)); // unshift adds the row to the front
  } else {
    // Otherwise, add each row to the end of the array (normal pattern)
    rows.push(padRow(i, count)); // push adds the row to the end
  }
}

// Initialize an empty string to store the final result (pattern)
let result = "";

// Loop through each row in the `rows` array and concatenate it to the result string
for (const row of rows) {
  result = result + "\n" + row; // Add a newline before each row
}

console.log(result);
