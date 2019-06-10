import * as func from "./functions";

test("it needs cookie!", () => {
  expect(func.cookie()).toBe("Gimmie some cookie!");
});

test("square is always right!", () => {
  expect(func.sqr(2)).toBe(4);
});

test("2^10 should be 1024", () => {
  expect(func.mathPower(2, 10)).toBe(1024);
});

test("add HTTP to my url", () => {
  expect(func.formatUrl("github.com")).toBe("http://github.com");
});

test("shout should return all uppercase", () => {
  expect(func.shout("hello")).toBe("HELLO");
});

test("should return valid HTML", () => {
  expect(func.formatHTML(1)).toBe(
    `<p>All new content for <em>1 paragraphs!</em></p>`
  );
});

test("1 * 2 * 3 should be 6", () => {
  expect(func.triple()).toBe(6);
});

test("2 * 3 * 4 should be 24", () => {
  expect(func.triple(2, 3, 4)).toBe(24);
});
