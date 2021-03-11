'''
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string 
inside the square brackets is being repeated exactly k times. 
Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; 
No extra white spaces, square brackets are well-formed, etc.
Furthermore, you may assume that the original data 
does not contain any digits and that digits are only 
for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

'''

class Solution(object):
    def decodeString(self, s):
        """
        :type s: str
        :rtype: str
        """
        i = 0
        j = len(s)-1
        stack = []
        brackets = ['[',']']
        snip = ''


        while(i<j):
            if s[i] == '[':
                stack.append()
           
            
            elif s[i] not in brackets:
                while (s[i] not in brackets):
                    snip = snip+





def main():
    sol = Solution()
    s=''
    sol.decodeString(s)

if __name__ == '__main__':
    main()