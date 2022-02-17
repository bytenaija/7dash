import { Add, replaceDelimiters } from "../calculator.controller";
  
describe("Calculator Controller", () => {
   
    describe("add number", () => {
      
        it("should replace all the delimiters and add all the numbers", async () => {
            const calulate =  Add("1,2,5");
            expect(calulate).toBe(8);
        }); 
    });

    describe("empty string", () => {
      
        it("Empty strings should return 0", async () => {
            const calulate =  Add("");
            expect(calulate).toBe(0);
        });
    });

    describe("whitespace string", () => {
      
        it("string contains just whitespace should return 0", async () => {
            const calulate =  Add(" ");
            expect(calulate).toBe(0);
       }); 
    });

    describe("new lines", () => {
      
        it("method to handle new lines in the input format", async () => {
            const calulateOne =  Add("1\n,2,3");
            const calulateTwo =  Add("1,\n2,4");
            expect(calulateOne).toBe(6);
            expect(calulateTwo).toBe(7);
        }); 
    });

    describe("custom delimiter", () => {
      
        it("Support a custom delimiter", async () => {
            const calulateOne =  Add("//;\n1;3;4");
            const calulateTwo =  Add("//$\n1$2$3");
            const calulateThree =  Add("//@\n2@3@8");
            expect(calulateOne).toBe(8);
            expect(calulateTwo).toBe(6);
            expect(calulateThree).toBe(13);
        }); 
    });
  
});