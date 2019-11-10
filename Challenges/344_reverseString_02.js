// My solution, taking an actual string.

const reverseString = s => {
  return s
    .split('')
    .reverse()
    .join('');
};

console.log(reverseString('Mello Yello'));
