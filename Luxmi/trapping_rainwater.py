class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        l = len(height)
        total_area = 0
    

        for i in range(1,l-1):

            left_max = height[i]
            for j in range(i):
                left_max = max(left_max,height[j])

            right_max = height[i]
            for j in range(i+1,l):
                right_max = max(right_max,height[j])

            total_area = total_area + (min(left_max,right_max) - height[i])
            

        return total_area

    def trap2(self, height):
                
     # To store the maximum water 
        # that can be stored 
        res = 0; 
        n = len(height)

        # For every element of the array 
        for i in range(1, n - 1) : 

            # Find the maximum element on its left 
            left = height[i]; 
            for j in range(i) :
                left = max(left, height[j]); 

            # Find the maximum element on its right 
            right = height[i]; 

            for j in range(i + 1 , n) : 
                right = max(right, height[j]);

            # Update the maximum water
            res = res + (min(left, right) - height[i]); 

        return res;


def main():
    sol = Solution()
    # height = [0,1,0,2,1,0,1,3,2,1,2,1]
    height = [4,2,0,3,2,5]
    print(sol.trap(height))

if __name__ == "__main__":
    print ('Calling main')
    main()