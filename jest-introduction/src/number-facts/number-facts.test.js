import { getRandomNumberFact } from "./";

test("should return a random number fact", async () => {
  const numberFact = await getRandomNumberFact();
  // siempre da error porque la api devuelve datos random entonces debemos usar un mock
  expect(numberFact.text).toBe(
    "158 is the year that the earliest dated use of Sol invictus, in a dedication from Rome."
  );
});