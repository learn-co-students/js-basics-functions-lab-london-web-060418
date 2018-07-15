// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  const hqBlock = 42
  let result = someValue - hqBlock
  return Math.abs(result)
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start - finish) * 264
}

function calculatesFarePrice(start, destination) {

  let distance = distanceTravelledInFeet (start, destination)

  if (distance < 400) {
    return 0
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 400 && distance < 2000) {
    fare = (distance - 400) * 2 / 100
    return fare
  } else {
    return 25
  }
}
