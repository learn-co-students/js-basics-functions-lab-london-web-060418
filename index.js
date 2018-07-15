// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42){
      return (block - 42)
    }
    else{
      return (42 - block)
    }
  }

function distanceFromHqInFeet(block) {
    if (block > 42){
      return (block - 42) * 264
    }
    else{
      return (42 - block) * 264
    }
  }

function distanceTravelledInFeet(start, destination) {
  if (destination > start){
    return (destination - start) * 264
  }
  else{
    return (start - destination) * 264
  }
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
      return 0
    } else if (distance > 400 && distance < 2000) {
      fare = (distance - 400) * 2 / 100
      return fare
    }
    else if (distance > 2000 && distance < 2500) {
      return 25
    }
    else {
      return 'cannot travel that far'
    }
}
