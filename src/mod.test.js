import * as mod from "./mod";

test("it should return true for [2, 3, 4] array", () => {
  expect(mod.isSorted([2, 3, 4])).toBe(true);
});

test("it should return false for [22, 31, 4] array", () => {
  expect(mod.isSorted([22, 31, 4])).toBe(false);
});

test("it should return deduplicated and sorted array", () => {
  expect(
    mod.deDuplicate([222, 23, 213, 23, 1, 3, 31, 2, 222, 4, 31, 4])
  ).toEqual([1, 2, 3, 4, 23, 31, 213, 222]);
});

test("it should return valid number with pad", () => {
  expect(mod.standardPad("221")).toBe("00000221");
  expect(mod.padFor("10", 3)).toBe("010");
  expect(mod.padFor("10", 4)).toBe("0010");
  expect(mod.padFor("10", 5)).toBe("00010");
});
