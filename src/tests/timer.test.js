const { formatTime, formatDoubleDigits, convertMinutesToSeconds } = require('../utils/time');

test('Format time', () => {
  const seconds = 50
  expect(formatTime(seconds)).toBe('0:50');
  const oneMinute = 60
  expect(formatTime(oneMinute)).toBe('1:00');
  const tenMinutes = 650
  expect(formatTime(tenMinutes)).toBe('10:50');
});


test('Format double digits', () => {
  const one = 1
  expect(formatDoubleDigits(one)).toBe('01');
  const zero = 0
  expect(formatDoubleDigits(zero)).toBe('00');
  const ten = 10
  expect(formatDoubleDigits(ten)).toBe('10');
});

test('Convert minutes to seconds', () => {
  const one = 1
  expect(convertMinutesToSeconds(one)).toBe(60);
});