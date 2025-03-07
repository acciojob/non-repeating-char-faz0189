function firstNonRepeatedChar(str)
{
	let map = new Map()
	for (let  i of str){
		if(map.has(i)){
			map.set(i,map.get(i)+1)
		}else{
			map.set(i,1)
		}
		
	}
	let answer = null
	map.forEach((v,k)=>{
        // console.log(k,v)
		if (v==1){
            answer = k
			return k
            
           
		}
			
	})
	return answer;
	
}
console.log(firstNonRepeatedChar('aabbcdd'))
