class Solution(object):
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
            if(m == n) and (s[i] != t[j] and edit<=1):
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
 
def main():
    sol = Solution()
    s = 'abcd'
    t = 'abbd'
    assert sol.oneEdit2(s,t) == True
    s = 'abdd'
    t = 'abfg'
    assert sol.oneEdit2(s,t) == False
    s = 'abcd'
    t = 'abecd'
    assert sol.oneEdit2(s,t) == True
    s = 'abcd'
    t = 'abefd'
    assert sol.oneEdit2(s,t) == False
    s = 'abcde'
    t = 'abcd'
    assert sol.oneEdit2(s,t) == True



if __name__ == "__main__":
    print ('Calling main')
    main()