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
                d[self.arr[i]] = i
            else:
                return True
            i = i + 1
        return False



                