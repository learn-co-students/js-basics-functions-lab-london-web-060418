function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startB, finishB) {
  if (startB < finishB) {
    return (finishB - startB) * 264;
  } else {
    return (startB - finishB) * 264;
  }
}

function calculatesFarePrice(startB, finishB) {
  if (distanceTravelledInFeet(startB, finishB) < 400) {
    return 0;
  } else if (distanceTravelledInFeet(startB, finishB) > 400 && distanceTravelledInFeet(startB, finishB) < 2000) {
    return (distanceTravelledInFeet(startB, finishB) - 400) * 0.02
  } else if (distanceTravelledInFeet(startB, finishB) > 2000 && distanceTravelledInFeet(startB, finishB) < 2500) {
    return 25;
  } else if (distanceTravelledInFeet(startB, finishB) > 2500) {
    return 'cannot travel that far';
  }
}
