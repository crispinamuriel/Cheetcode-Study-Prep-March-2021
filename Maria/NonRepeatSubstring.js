function lengthOfLongestSubstring(str) {
    let windowStart = 0
    let maxLength = 0
    let charIndexMap = {}
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
        let char = str[windowEnd]
        if (char in charIndexMap){
            //shrink window from left side to remove ONLY duplicated letter
            //but if the duplicted letter is not adjacent then don't do anything
            windowStart = Math.max(windowStart,charIndexMap[char]+1 )
        }
        //update value of char in map
        charIndexMap[char] = windowEnd
        maxLength = Math.max(maxLength,windowEnd - windowStart+1 )
    }
    return maxLength
}