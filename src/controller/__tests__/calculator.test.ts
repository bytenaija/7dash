import { performOperation } from "../calculator.controller";
  
describe("Calculator coontroller", () => {
    let x: number = 99;
    let y: number = 1;

    const calPayload = {
        x: 99,
        y: 1,
      };
   
    describe("add number", () => {
      
        it("should return true", async () => {
            const calculator =  performOperation(calPayload,x,y);
            expect(calculator).toBe(calPayload.x+calPayload.y);
        });

        // it("1 + 1 = 2", () => {
        //     expect(1 + 1).toBe(2);
        //   });
        
    });
  
});