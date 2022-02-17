export interface Operation {
    input: string;
}

export const  replaceDelimiters = (param: any) => {
    return param.match(/-?\d+/g).map(Number);
}

export const  Add = (input: string) => {

  let total: number = 0;

  const resultChar = replaceDelimiters(input);
  for (let i = 0; i < resultChar.length; i++) {
	 
    console.log(Number(resultChar[i]));
    if(Number(resultChar[i]) < 0){
        return "Negatives not allowed";	
    }
    if(Number(resultChar[i]) < 1000){			
        total += Number(resultChar[i]);	 
    }
    
 }

    return total;

};




