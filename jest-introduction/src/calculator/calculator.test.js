import { calculator } from '.';
test('sum calc', () => {
  // Arrange
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
})

test.todo('extract calc');
test.todo('multiply calc');
test.todo('divide calc');
