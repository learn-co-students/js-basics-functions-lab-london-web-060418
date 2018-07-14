// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block < 42) {
    return 42 - block;
  } else {
    return block - 42;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);

  switch(true) {
    case (distance <= 400):
      return 0;
    case (distance > 400 && distance <= 2000):
      return (distance - 400) * .02;
    case (distance > 2000 && distance < 2500):
      return 25;
    case (distance > 2500):
      return 'cannot travel that far';
    }
};
