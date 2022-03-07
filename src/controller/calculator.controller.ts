export interface Operation {
    input: string;
}

export const  replaceDelimiters = (param: any) => {
    return param.match(/-?\d+/g).map(Number);
}
export const  replaceDelimitersDecimal = (param: any) => {
    let result;
    result = param.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);
    result = String(result);
    return result.split(',').map(Number);
}
const isValidInput = (input: any) =>{

    if((/\p{L}/u.test(input))){
        return true;
    }
    if (input && !input.trim() || !input.trim().length) {
        return true;
    }
    return false;
}

export const  Add = (input: string) => {

if(isValidInput(input)){
    return 0;
}

  let total: number = 0;
  let temNegative = [];

  const resultChar = replaceDelimiters(input);
  for (let i = 0; i < resultChar.length; i++) {
	 
    if(Number(resultChar[i]) < 0){
        temNegative.push(resultChar[i]);
        //return "Negatives not allowed";	
    }
    if(Number(resultChar[i]) < 1000){			
        total += Number(resultChar[i]);	 
    }
    
 }

 if()

    return total;

};




