import { Add, replaceDelimiters } from "../calculator.controller";
  
describe("Calculator coontroller", () => {
   
    describe("add number", () => {
      
        it("should replace all the delimiters and add all the numbers", async () => {
            const calculator =  Add("1,2,5");
            expect(calculator).toBe(8);
        });
        
    });
  
});