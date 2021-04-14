// The first line contains 3 space-separated integers, a[0], a[1], and a[2]
// The second line contains 3 space-separated integers, b[0], b[1], and b[2]
// Find comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], a is awarded 1 point
// If a[i] < b[i], b is awarded 1 point
// If a[i] = b[i], each receives a point

const compareTriplets = (a, b) => {
  let result = [];
  let aScore = 0;
  let bScore = 0;

  let aPoints = 0;
  let bPoints = 0;

  for (let i = 0; i < 3; i++) {
    aPoints = a[i];
    bPoints = b[i];

    if (aPoints !== bPoints) {
      aPoints > bPoints ? aScore++ : bScore++
    }
  }

  result.push(aScore);
  result.push(bScore);
  return result;
}
