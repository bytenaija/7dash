  
describe("Calculator coontroller", () => {

    describe("add number", () => {

        it("1 + 1 = 2", () => {
            expect(1 + 1).toBe(2);
          });
        
          it("-1 * -1 !== -1", () => {
            expect(-1 * -1).not.toBe(-1);
          });
    });
  
});