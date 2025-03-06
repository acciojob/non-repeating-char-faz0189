

	
  function firstNonRepeatedChar(str) {
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the character appears only once
    if (str.split(str[i]).length - 1 === 1) {
      return str[i]; // Return the first non-repeated character
    }
  }
  return null; // Return null if no non-repeated character is found
}
