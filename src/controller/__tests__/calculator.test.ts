import { Add, replaceDelimiters } from "../calculator.controller";
  
describe("Calculator Controller", () => {
   
    describe("add number", () => {
      
        it("should replace all the delimiters and add all the numbers", async () => {
            const calculator =  Add("1,2,5");
            expect(calculator).toBe(8);
        });
        
    });

    describe("empty string", () => {
      
        it("Empty strings should return 0", async () => {
            const calculator =  Add(" ");
            expect(calculator).toBe(0);
        });
        
    });
  
});