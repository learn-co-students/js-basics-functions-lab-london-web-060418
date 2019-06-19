// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  return Math.abs(dist - 42);
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264
}

function distanceTravelledInFeet(dist1, dist2) {
  return Math.abs(dist2 - dist1) * 264
}

function calculatesFarePrice(dist1, dist2) {
  dist = distanceTravelledInFeet(dist1, dist2)

  cost = 0.0
  if(dist > 2500) {
    cost = "cannot travel that far"
  } else {
    while(dist > 400) {
      if(dist > 2000) {
        cost = 25
        break;
      } else {
        cost += (dist - 400) * 0.02
        dist = 400
        break;
      }
    }
  }

  return cost
}