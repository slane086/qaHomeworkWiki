describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World/).toBe("Hello World");
      expect(stringCheck("word" )).toBeTruthy();
      expect(stringCheck("a full sentence")).toBeTruthy();
      expect(stringCheck("213)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(/3.14159/).toBe(3.14159);
      expect(numberCheck(.2546)).toBeTruthy();
      expect(numberCheck(3 + 1/)).toBeTruthy();
      expect(numberCheck("letters")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect( a matching boolean).toBe(false);
      expect(booleanCheck(5 < 10)).toBeTruthy();
      expect(booleanCheck(false)).toBeTruthy();
      expect(booleanCheck(5)).toBeFalsy();
    });
  });

  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }



