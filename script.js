function firstNonRepeatedChar(str)
{
	for (let p = 0;  p<=str.length; p++){
		if (str.indexof(str[p] === str.lastIndexof(str[p]))){
			return str[p]
		}
	}
	return null;
}