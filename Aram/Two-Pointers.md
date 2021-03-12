# Question #1 Pair with Target Sum
## Time: --- Space: 

###### Given an array of sorted numbers and a target sum find a pair in the array whose sum is euqal to the guven target
###### Wite a function that return the indices of the two numbers (i.e. the pair) such that they add up to the given target

```JavaScript
const twoSumSorted = (array, target) => {
    let p1 = 0
    let p2 = array.length - 1
    let reference = {}

    for (let i = 0; i < array.length; i++) {
        if (array[p1] + array[p2] < target) {
            p1++
        } else if (array[p1] + array[p2] > target) {
            p2++
        } else if (array[p1] + array[p2] === target){
            return [p1, p2]
        } else {
            return [-1, -1]
        }
    }
}


```