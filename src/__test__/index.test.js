import { reverseStr } from "../index";

describe("revert String test 1", () => {
  it("should reverse string", () => expect(reverseStr("new")).toBe("wen"));
});
xdescribe("revert String test 2", () => {
    it("should reverse string", () => expect(reverseStr("new")).toBe("new"));
  });