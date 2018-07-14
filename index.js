// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  const blocks = distanceFromHqInBlocks(street);
  return 264 * blocks;
}

function distanceTravelledInFeet(start, end) {
  const blocks = Math.abs(start - end);
  return 264 * blocks;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end) - 400;
  let fare = 0;
  switch (true) {
    case distance < 0:
      break
    case distance < 1600:
      fare = distance * 0.02
      break
    case distance < 2100:
      fare = 25
      break
    default:
      fare = "cannot travel that far";
  }
  return fare
}
