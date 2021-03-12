const fruits_into_baskets = function(fruits) {
    let windowStart = 0
    let fruitCount = {}
    let maxCount = 0
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++){
      let fruit = fruits[windowEnd]
      //add fruit if not in {}
      if (fruit in fruitCount){
        fruitCount[fruit]++
      }else{
        fruitCount[fruit] = 1
      }
      //if we have too many fruits 
      while (Object.keys(fruitCount).length > 2){
        //move window by one to the right
        fruitCount[fruits[windowStart]] -= 1
        if (fruitCount[fruits[windowStart]] === 0) delete fruitCount[fruits[windowStart]]
        windowStart++
      }
      maxCount = Math.max(maxCount,windowEnd-windowStart+1)
    }
    return maxCount;
  };