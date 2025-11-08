import { sumIntegers } from '../pages/addition';


describe('addition', () => {
  test('adds a positive and positive', () => {
        expect(sumIntegers(2,2)).toBe(4)
    });
  test('adds a positive and negative number', () => {
    expect(sumIntegers(10, -4)).toBe(6);
  });

  test('adds string numbers correctly', () => {
    expect(sumIntegers('7', '8')).toBe(15);
  });

  test('adds zero correctly', () => {
    expect(sumIntegers(0, 5)).toBe(5);
  });
});