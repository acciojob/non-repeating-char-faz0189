function firstNonRepeatedChar(str) {

	function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

// Example usage
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc')); // null
console.log(firstNonRepeatedChar('abcdef')); // 'a'
console.log(firstNonRepeatedChar('')); // null
