class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """


        i = 0
        len_needle = len(needle)
        # edge cases
        if not needle:
            return 0
        if haystack == needle:
            return 0

        while(i<=len(haystack)-len_needle):
            if haystack[i:i+len_needle] == needle:
                return i
            i = i+1
        
        return -1



def main():
    sol = Solution()
    haystack ='hello'
    needle = 'll'
    print(sol.strStr(haystack,needle))
    haystack ='aaaaa'
    needle = 'bba'
    print(sol.strStr(haystack,needle))
    haystack =''
    needle = ''
    print(sol.strStr(haystack,needle))
    haystack ='abc'
    needle = 'c'
    print(sol.strStr(haystack,needle))

if __name__ == "__main__":
    print ('Calling main')
    main()