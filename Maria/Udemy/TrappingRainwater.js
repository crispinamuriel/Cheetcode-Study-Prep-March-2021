function trap (heights){
    let totalWater = 0 , maxL = 0 , maxR = 0, leftP = 0 , rightP = heights.length-1
    
    while (leftP < rightP){
        //determine which pointer to operate on
        let leftHeight = heights[leftP]
        let rightHeight = heights[rightP]
        if (leftHeight<=rightHeight){
            //maxL
            if (maxL > leftHeight){
                //calculate water
                totalWater += (maxL - leftHeight)
            }else{
                maxL = leftHeight
            }
            leftP++
        }else{
            //maxR
             if (maxR > rightHeight){
                //calculate water
                totalWater += (maxR - rightHeight)
            }else{
              maxR = rightHeight
            }
              rightP-- 
        } 
    }
    return totalWater
}