

function firstNonRepeatedChar(str) {
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the character appears only once using indexOf and lastIndexOf
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i]; // Return the first non-repeated character
    }
  }
  return null; // Return null if no non-repeated character is found
}
