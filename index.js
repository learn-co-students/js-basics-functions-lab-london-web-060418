// // Code your solution in this file!
function distanceTravelledInFeet(start, finish){
  if (finish > start){
    return (finish - start) * 264
  }
  else{
    return (start - finish) * 264
  }
}

function distanceFromHqInBlocks(block) {
  // const block = 263
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
function calculatesFarePrice(start, destination){
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
