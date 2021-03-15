# Binary search template

    i = 0
    j = len(nums)-1 # 
    
    while(i<=j):
        mid = (i +j)// 2 # what is mid
        if target == nums[mid]:
            return mid
        elif target > nums[mid]:
            i = mid + 1
        elif target < nums[mid]:
            j = mid-1
            
    return -1
