function twoSum (nums, target) {
    let numsObj = {}
    for (let i = 0; i < nums.length; i++){
        let value = nums[i]
        let mapValue = numsObj[value]
        if (mapValue >= 0){  
            return [mapValue,i]
        }else{
            let numToFind = target - value
            numsObj[numToFind]=i
        }
    }
       return null
   };