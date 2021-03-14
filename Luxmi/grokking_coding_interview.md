# Sliding Window Protocol


## 1. Maximum Sum Subarray of Size K (easy)
### Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

```python
def max_sub_array_of_size_k(k, arr):
  # TODO: Write your code here
  windowStart = 0
  maxSum = 0
  windowSum = 0
  for windowEnd in range(len(arr)):

    windowSum = arr[windowEnd] + windowSum
    if windowEnd >= k-1:
      maxSum = max(maxSum, windowSum)
      windowSum -= arr[windowStart]
      windowStart = windowStart + 1


  return maxSum

```
---

## 2. Smallest Subarray with a given sum (easy)
### Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

```python
def smallest_subarray_with_given_sum(s, arr):
  # TODO: Write your code here
  window_start = 0
  window_sum = 0
  min_length = float("inf")

  for window_end in range(len(arr)):
    window_sum += arr[window_end]

    while (window_sum >= s):
      min_length = min(min_length, window_end- window_start + 1)
      window_sum -= arr[window_start]
      window_start += 1

  return min_length

  ```
---

## 3. Longest Substring with K Distinct Characters (medium)
### Given a string, find the length of the longest substring in it with no more than K distinct characters.


```python

def longest_substring_with_k_distinct(str, k):
  # TODO: Write your code here
    window_start = 0
    window_hash = {}
    max_length = -1
    #String="araaci", K=2
    for window_end in range(len(str)): #for loop begins with window_end
        end_char = str[window_end]
        print(window_hash)

        if end_char not in window_hash:  # condition to build the substring
            window_hash[end_char] = 0
        window_hash[end_char] += 1
        
        while (len(window_hash) > k):  # check how long we are going to slide window_start to right
            start_char = str[window_start] 
            window_hash[start_char] -= 1
            if window_hash[start_char] == 0:
            del window_hash[start_char]
            window_start += 1

        max_length = max(max_length, window_end - window_start + 1) # evaluate outside while if we need max
        print (max_length)


    return max_length

```

## Fruits into Baskets (medium)
### Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

### You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

### Write a function to return the maximum number of fruits in both baskets.

```python
'''
hash table --> fruits_map
window start 
window end --> for 0 to len-1 
fruits_map mapping of at most 2 fruits and their count in contiguous manner
while loop: the count of keys in fruit_map > k
    then i drop the fruit on windowStart 
    if count of fruit in fruit_map == 0 then drop the key
    increment windowStart
    keep on doing this until number of type of fruits in fruits_map == k

max_fruits = max (max_fruits, sum of all valuesof fruitmap)
'''

def fruits_into_baskets(fruits):
  # TODO: Write your code here
  window_start = 0
  max_fruits = 0
  fruits_map = {}
  k = 2

  


  for window_end in range(len(fruits)):
    fruit = fruits[window_end]

    if fruit not in fruits_map:
      fruits_map[fruit] = 0
    fruits_map[fruit] +=1

    while (len(fruits_map) > k):
      print(fruits_map)
      temp = fruits[window_start]
      fruits_map[temp] -= 1
      if fruits_map[temp] == 0:
        del fruits_map[temp]
      window_start +=1
    
    max_fruits = max(max_fruits, sum(fruits_map.values()))

  return max_fruits
  ```