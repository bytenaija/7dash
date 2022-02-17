import { Add, replaceDelimiters } from "../calculator.controller";
  
describe("Calculator Controller", () => {
   
    describe("test delimiters", () => {
      
        it("should replace all the delimiters and return array of numbers", async () => {
            const calulate =  replaceDelimiters("10,20,30");
            const calulateTwo =  replaceDelimiters("1\n,2,3");
            expect(calulate).toEqual([10,20,30]);
            expect(calulateTwo).toEqual([1,2,3]);
            
        }); 
    });

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

    describe("negatives number", () => {
      
        it("Calling add with a negative number should throw an exception", async () => {
            const calulate =  Add("1,2,-5");
            expect(calulate).toBe("Negatives not allowed");
        }); 
    });

    describe("multiple delimiters", () => {
      
        it("Bonus points: Allow multiple delimiters of arbitrary length", async () => {
            const calulateOne =  Add("2,1001");
            const calulateTwo =  Add("//***\n1***2***3");
            const calulateThree =  Add("//$,@\n1$2@3");
            expect(calulateOne).toBe(2);
            expect(calulateTwo).toBe(6);
            expect(calulateThree).toBe(6);
        }); 
    });

    describe("isNot number", () => {
      
        it("Check if Sring Is not a Number, should return 0", async () => {
            const calulate =  Add("FDGSDHSS");
            expect(calulate).toBe(0);
       }); 
    });
  
});