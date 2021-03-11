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
