function firstNonRepeatedChar(str) {
let str = 'aabbcdd'
	for (let k=0; k<=str.length; k++){
		if (str.indexof(str[k]) == str.lastIndexof(str[k])){
            retrun str[k];
		}
	}
	return null;
}
