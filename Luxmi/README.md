###  1. [Two sum](https://leetcode.com/problems/two-sum/)
    Unsorted array
```python
        dict_nums = {}
        i = 0
        for n in nums:
            if (target-n) not in dict_nums:
                dict_nums[n] = i
            else:
                return i, dict_nums[target-n]
            i = i+1
        return None
```

    Sorted Array
```python
        i = 0
        j = len(nums) - 1

        while(i < j):
            sum = nums[i] + nums[j]
            if sum == target:
                return i,j
            elif sum > target:
                j = j-1
            elif sum < target:
                i = i+1


        return None
```
---
###    2. [Container with most water](https://leetcode.com/problems/container-with-most-water/) 

```python
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        i = 0
        l = len(height)
        j = l - 1
        maxA = 0
        while(i<l and j>i):
            if (height[i]< height[j]):
                area = height[i]*abs(j-i)
                i = i+1
            else:
                area = height[j]*abs(j-i)
                j = j-1
            print(area)
            if maxA < area:
                maxA = area

        return maxA
        
```
---
###    3. [Trapping Water](https://leetcode.com/problems/trapping-rain-water/)

    
        l = len(height)
        total_area = 0
    
```python
        for i in range(1,l-1):

            left_max = height[i]
            for j in range(i):
                left_max = max(left_max,height[j])

            right_max = height[i]
            for j in range(i+1,l):
                right_max = max(right_max,height[j])

            total_area = total_area + (min(left_max,right_max) - height[i])
            

        return total_area

```

---
###    4. [Backspace string compare](https://leetcode.com/problems/backspace-string-compare/)

```python
    class OpStack(object):
        def __init__(self):
            self.arr = []

        def pop(self):
            l = len(self.arr)
            if l != 0:
                r = self.arr[l-1]
                # self.arr.remove(r)
                self.arr.pop(l-1)
                return r
            return None

        def peek(self):
            l = len(self.arr)
            if l != 0:
                r = self.arr[l-1]
                return r
            return

        def push(self, value):
            self.arr.append(value)

        def traverse(self):
            print (self.arr)

        def length(self):
            return len(self.arr)

        def isEmpty(self):
            return self.length() == 0

        def generateString(self):
            str = ''
            l = len(self.arr)
            if l != 0:
                for c in self.arr:
                    str = str + c
            return str

    
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """

        if self.backspaceString(S).generateString() == self.backspaceString(T).generateString():
            return True
        return False

    def backspaceString(self, str):
        op = OpStack()
        for c in str:
            if c == '#':
                op.pop()
            else:
                op.push(c)


        return op
```
---

###    5. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

```python
    if s is None or not s:
            return 0

    l = len(s)

    i = 0
    
    longest_string = s[0]
    while(i<l-1):
        j = i+1
        while ((j < l) and (s[j] not in s[i:j])):
            j = j+1

        temp_str = s[i:j]
        if len(temp_str) > len(longest_string):
            longest_string = temp_str
        i = i+1
        print(longest_string)

    return len(longest_string)
```

---

###    6a. [Valid Palindrome (with special characters)](https://leetcode.com/problems/valid-palindrome)

```python
    lower_s = s.lower()

    l = len(lower_s)

    i = 0
    j = l - 1

    while(i<j):
        while(i<j and not lower_s[i].isalnum()):
            i = i+1
        while(i<j and not lower_s[j].isalnum()):
            j = j-1


        if lower_s[i] != lower_s[j]:
            return False

        i = i+1
        j = j-1


    return True
```
---

###    6b. [Valid Palindrome (with one character deletion)](https://leetcode.com/problems/valid-palindrome-ii/)

```python
    def isPalindrome(self,s):

        isValid = 0

        return self.checkPalindrome(s, 0, len(s) - 1, isValid)



    def checkPalindrome(self,s, start, end, isValid):
        if start >= end:
            return True
        elif s[start] == s[end] and isValid <=1:
            return self.checkPalindrome(s, start+1, end -1, isValid)
        else:
            isValid = isValid+1

        if isValid <= 1:
            return self.checkPalindrome(s, start+1, end, isValid) or self.checkPalindrome(s, start, end -1, isValid)
        else:
            return False 

```
---

### [Two sum-ii](https://leetcode.com/problems/two-sum-iii-data-structure-design/submissions/)
```python

class TwoSum(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.arr = []
        

    def add(self, number):
        """
        Add the number to an internal data structure..
        :type number: int
        :rtype: None
        """
        self.arr.append(number)
        

    def find(self, value):
        """
        Find if there exists any pair of numbers which sum is equal to the value.
        :type value: int
        :rtype: bool
        """
        i = 0
        j = len(self.arr)
        d = {}
        while(i<j):
            if (value - self.arr[i]) not in d:
                d[self.arr[i]] = i #Solved with hash since the ordering of numbers is not known.
            else:
                return True
            i = i + 1
        return False
                

```
---

### [One edit](https://leetcode.com/problems/edit-distance/)

```python
def oneEdit(self, s, t): # using an external variable. O(n)
        m = len(s)
        n = len(t)
        if abs(m-n)>1:
            return False
        if m < n:
            return self.oneEdit(t,s)

        i = 0
        j = 0
        edit = 0
        while(i<m and j<n):
            print(i,j)
            print(s[i], t[j])
            if(m == n) and (s[i] != t[j] and edit<=1): #count how many times there is a different in character and return false if diff>1
                edit = edit + 1
            elif (m != n) and (s[i] != t[j] and edit<=1):
                edit = edit + 1
                i=i+1
                continue
          
            if edit > 1:
                    return False
            i = i+1
            j = j+1

        return True

    def oneEdit2(self,s ,t): # using string concat. O(n)
        m = len(s)
        n = len(t)
        if abs(m-n)>2:
            return False
        if m > n:
            return self.oneEdit2(t,s)
        
        i = 0
        j = 0
        while(i < m and j < n):
            if m == n and s[i] != t[j]:
                s = s[:i] + t[j] + s[i+1:] # split and join string as 'ab' + 'b' + 'd'
                return s == t
            elif m != n and s[i] != t[j]:
                s = s[:i] + t[j] + s[i:]  # split and join string as 'ab' + 'e' + 'cd'
                return s == t
            else:
                i = i+1
                j = j+1
                continue
        return True

```