export interface Operation {
    x: number;
    y: number;
  }


export const  performOperation = (input: Operation, x: number, y: number) => {
  const handleAdd = (x: number, y: number) : number => x + y;

  return handleAdd(x,y);

};




