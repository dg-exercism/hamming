//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (left, right) => {
  if (!left.length && right.length) {
    throw new Error('left strand must not be empty')
  } 
  if (left.length && !right.length) {
    throw new Error('right strand must not be empty')
  }
  if (left.length !== right.length) {
    throw new Error('left and right strands must be of equal length')
  }
  let hamming = 0;
  if (!left.length && !right.length) {
    return hamming
  }
  let leftArray = left.split('');
  leftArray.forEach((letter, i) => {
    if (letter !== right[i]) {
    hamming++
    }
  })
  return hamming
};
