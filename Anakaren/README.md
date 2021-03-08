






# Mastering the coding interview questions 

### Question #1 Google Interview Question Two Sum (Easy)
/*
*   Question: Given an Array of integers, find two numbers such that they add up to a specific target number 
*   Inputs: int[], target number
*   Output: indices of two numbers that sum to target number
*   Assumptions: each target number will have exactly one solution
*   Example 1 (all positive ints)
*   Inputs: [1,3,4,6,8], 10
*   Outputs: [2,3] (indices of 4,6)
*   Approach: Create a dictionary, iterate through array, store {key, index}, check if (target - item) exists in dictionary
*   Big O: O(n) runtime, O(n) space
*/

    public static int[] TwoSum(int[] intArray, int targetNumber)
    {
        //validate array is not empty
        if(intArray.Length <= 0 )
        {
            Console.WriteLine("Empty Array");
            return null;
        }

        //create dictionary
        Dictionary<int, int> dict = new Dictionary<int, int>();

        //loop through array
        for(var i = 0; i < intArray.Length; i++)
        {
            //store difference
            var diff = targetNumber - intArray[i];

            //check if difference is found in dictionary
            if(dict.ContainsKey(diff))
            {
                //add one to indices since they are not zero based 
                return new int[]{dict[diff]+1 , i+1};
            }
            
            //otherwise add to dictionary
            dict.Add(intArray[i], i);
        }

        Console.WriteLine("No matches found");
        return null;

    }

### Question #2 Container With Most Water (Medium)
/*
*   Question: Given an array of positive ints where each int represents the height of a vertical line on a chart.  Find two lines which, together with the x-axis, form a container that would hold the greatest amount of water. Return the area of water it would hold. 
*   Inputs: int[]
*   Output: area of the greatest amount of water held 
*   Example:
*   Inputs: int[] = {1, 8, 6, 2, 9, 4}
*   Output: 24
*   Approach: Brute force -> nested loops to iterate through array at different speeds 
*   Assumptions: area = height x (indexRight - indexLeft), lines inside container doesn't affect the area
*   Big O: O(n^2) time, O(1) space
*/

    public static int ContainerWithMostWater_BF(int[] intArray)
    {
        //validate input
        if(intArray.Length < 2)
        {
            return 0;
        }

        int maxArea = 0;

        //iterate through the array
        for(int i = 0; i< intArray.Length; i++)
        {
            for(int j = i+1; j < intArray.Length; j++)
            {
                //find the min between [i] and [j] to set as height
                var height = Math.Min(intArray[i], intArray[j]);

                //find the width
                var width = j - i;

                //find current area
                var area = height * width;

                //set max area to value that's greater between max area and area
                maxArea = Math.Max(maxArea, area);

            }
        }

        return maxArea;
    }

    /*
    *   Approach: Two pointers -> move pointer based on whichever is smaller, store maxArea
    *   Big O: O(n) time, O(1) space
    */

    public static int ContainerWithMostWater_O(int[] intArray)
    {
        //validate input
        if(intArray.Length < 2)
        {
            return 0;
        }

        //create two pointers
        int i = 0;
        int j = intArray.Length - 1;

        //create maxArea variable
        int maxArea = 0;

        //iterate through array
        while(i < j)
        {
            //calculate height
            var height = Math.Min(intArray[i], intArray[j]);

            //calculate width
            var width = j - i;

            //calculate current area 
            int area = height * width;

            maxArea = Math.Max(maxArea, area);

            //if [i] less than or equal to [j], increase i
            if(intArray[i] <= intArray[j])
            {
                i++;
            }

            //if [i] is greater than [j], decrease j
            if(intArray[i] > intArray[j])
            {
                j--;
            }
        }

        return maxArea;
    }

### Question #3 Trapping Rainwater (Hard)
/*
*   Question: Given n non-negative ints representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining 
*   Input: int[] 
*   Output: amount of water that can be trapped after raining
*   Example
*   Input: int[] = new {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
*   Output: 6
*   Approach: ?
*   Big O: 
*/

### Question #4 Backspace String Compare (Easy)
### Question #5 Longest Substring Without Repeating Characters (Medium)
### Question #6a Valid Palindrome(Easy)

/*
*   Valid Palindrome
*   QUESTION: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*   APPROACH: Create two pointers at opposite ends of the array (string) and if they're not equal, return false
*   Big O: O(n) time, O(1) space
*/

public static bool StringAPalindrome(string input)
{
    //validate input
    if(string.IsNullOrEmpty(input))
    {
        return false;
    }

    //change input to lowercase and remove spaces
    input = input.ToLower().Replace(" ","");

    //create a pointer that is equal to the length of the string - 1
    int j = input.Length-1;

    //loop through input 
    for (int i = 0; i < j; i++)
    {
        if(input[i] != input[j])
        {
            return false;
        }

        j--;
        continue;
    }

    return true;
}


### Question #6b Almost Palindrome (Easy)
### Question #7 M, N Reversals (Medium)
### Question #8 Merge Multi-Level Doubly Linked List (Medium)
### Question #9 Cycle Detection (Medium)
### Question #10 Valid Parentheses (Easy)
### Question #11 Minimum Brackets To Remove To Make Valid (Medium)
### Question #12 Implement Queue With Stacks (Easy)
### Question #13 Kth Largest Element (Medium)
### Question #14 Start And End Of Target (Medium)
### Question #15 Maximum Depth Of Binary Tree (Easy)
### Question #16 Level Order Of Binary Tree (Medium)
### Question #17 Right Side View of Tree (Medium)
### Question #18 Number Of Nodes In Complete Tree (Medium)
### Question #19 Validate Binary Search Tree (Medium)
### Question #20 Number Of Islands (Medium)
### Question #21 Rotting Oranges (Medium)
### Question #22 Walls And Gates (Medium)
### Question #23 Time Needed To Inform All Employees (Medium)
### Question #24 Course Scheduler (Medium)
### Question #25 Network Time Delay (Medium)
### Question #26 Minimum Cost Of Climbing Stairs (Easy)
### Question #27 Knight Probability In Chessboard (Medium)
### Question #28 Sudoku Solver (Hard)
### Question #29 Monarchy (Medium)
### Question #30 Implement Prefix Trie (Medium)

# Clean code handbook questions

### Two Sum II
/*
*   Question: Given a sorted Array of integers, find two numbers such that they add up to a specific target number 
*   Inputs: int[], targetNumber 
*   Output: indices of two numbers that sum to target number
*   Provided: each target will have exactly one solution, indices are non-zero
*   Example
*   Inputs: int[] = {1,3,5,8,9}, int targetNumber = 11
*   Outputs: int[] = {2,4} (non-zero indices of 3, 8)
*   Approach: Create two pointers at either end of the array, move them depending on their sum relative to targetNumber
*/

    public static int[] TwoSumTwo(int[] intArray, int targetNumber)
    {
        //validate intArray
        if(intArray.Length <= 0)
        {
            return null;
        }

        //create two pointers
        int i = 0;
        int j = intArray.Length - 1;

        //iterate through the array
        while(i < j)
        {
            //if [i] + [j] < targetNumber, increase i
            if(intArray[i] + intArray[j] < targetNumber)
            {
                i++;
            }

            //if [i] + [j] > targetNumber, decrease j
            else if(intArray[i] + intArray[j] > targetNumber)
            {
                j++;
            }
            //if [i] + [j] = targetNumber, add indices + 1 to new array and return
            {
                return new int[] = {i + 1, j + 1};
            }
        }

        //otherwise return null
        Console.WriteLine("No solution found");
        return null;
    }


### Two Sum III
### Valid Palindrome
### Implement STRSTR()
### Reverse words in a string
### Reverse words in a string II
### String to Integer (ATOI)

/*
*   String to Integer
*   QUESTION: (C# doesnt have atoi) Convert a string to an integer
*   APPROACH: Add ints to list as chars, loop through string, convert each element
*/

public static int StringToInt(string input)
{
    //validate input 
    if(string.IsNullOrEmpty(input))
    {
        Console.WriteLine("Empty string");
        return -1;
    }

    //create empty var
    int currentInt = 0;

    //list of digits
    List<char> digitsList = new List<char> { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

    //loop through input
    foreach (var i in input)
    {
        //if current i isn't in digits list, return 
        if(!digitsList.Contains(i))
        {
            Console.WriteLine("Invalid int");
            return -1;
        }

        int j = 0;
        //convert char i to int j
        switch (i)
        {
            case '0': j = 0;
                break;
            case '1': j = 1;
                break;
            case '2': j = 2;
                break;
            case '3': j = 3;
                break;
            case '4': j = 4;
                break;
            case '5': j = 5;
                break;
            case '6': j = 6;
                break;
            case '7': j = 7;
                break;
            case '8': j = 8;
                break;
            case '9': j = 9;
                break;
        }

        //multiply current int by 10 and add j
        currentInt = (currentInt * 10) + j;
    }

    return currentInt;
}

### Valid Number
### Longest Substring without repeating Characters
### Longest Substring with at Most Two Distinct Characters
### Missing Ranges
### Longest Palindromic Substring
### One Edit Distance
### Read N Characters Given Read4
### Read N Characters Given read4 call multiple times
### Reverse Integer
### Plus One
### Palindrome Number
### Merge Two Sorted Lists
### Add Two Numbers
### Swap Nodes in Pairs
### Merge K Sorted Linked Lists
### Copy List with Random Pointer
### Valid Binary Search Tree
### Maximum Depth of a Binary Tree
### Minimum Depth of a Binary Tree
### Balanced Binary Tree
### Convert Sorted Array to Balanced Binary Search Tree
### Convert Sorted List to Balanced Binary Search Tree
### Binary Tree Maximum Path Sum
### Binary Tree Upside Down
### Single Number
### Single Number II
### Spiral Matrix
### Integer to Roman
### Roman to Integer
### Clone Graph
### Climbing Stairs
### Unique Paths
### Unique Paths II
### Maximum Sum Subarray
### Maximum Products Subarray
### Coins in a Line
### Search Insert Position
### Find Minimum in Sorted rotated Array
### Find Minimum in rotated sorted Array II (with duplicates)


# Grokking the coding interview

## Pattern: Sliding Window (11)
### Maximum Sum Subarray of Size K (easy): new (​link​)
### Smallest Subarray with a given sum (easy): LC 209
### Longest Substring with K Distinct Characters (medium): LC 340
### Fruits into Baskets (medium): LC 904
### No-repeat Substring (hard): LC 3
### Longest Substring with Same Letters after Replacement (hard)
### LC 424 Longest Subarray with Ones after Replacement (hard)
### LC 1004 Problem Challenge 1: LC 567
### Problem Challenge 2: LC 438
### Problem Challenge 3: LC 76
### Problem Challenge 4: LC 30

## Pattern: Two Pointers (11)
### Pair with Target Sum (easy): LC1
### Remove Duplicates (easy): LC 26
### Squaring a Sorted Array (easy): LC 977
### Triplet Sum to Zero (medium): LC 15
### Triplet Sum Close to Target (medium): LC 16
### Triplets with Smaller Sum (medium): LC 259
### Subarrays with Product Less than a Target (medium): LC 713
### Dutch National Flag Problem (medium): LC 75
### Problem Challenge 1: LC 18
### Problem Challenge 2: LC 844
### Problem Challenge 3: LC 581

## Pattern: Fast & Slow pointers (7)
### LinkedList Cycle (easy): LC 141
### Start of LinkedList Cycle (medium): LC 142
### Happy Number (medium): LC 202
### Middle of the LinkedList (easy): LC 876
### Problem Challenge 1: LC 234
### Problem Challenge 2: LC 143
### Problem Challenge 3: LC 457

## Pattern: Merge Intervals (7)
### Merge Intervals (medium): LC 56
### Insert Interval (medium): LC 57
### Intervals Intersection (medium): LC 986
### Conflicting Appointments (medium): LC 252
### Problem Challenge 1: LC 253
### Problem Challenge 2: new (​link​)
### Problem Challenge 3: LC 759

## Pattern: Cyclic Sort (8)
### Cyclic Sort (easy): new (​link​)
### Find the Missing Number (easy): LC 268
### Find all Missing Numbers (easy): LC 448
### Find the Duplicate Number (easy): LC 287
### Find all Duplicate Numbers (easy): LC 442
### Problem Challenge 1: LC 645
### Problem Challenge 2: LC 41
### Problem Challenge 3: new (​link​)

## Pattern: In-place Reversal of a LinkedList (5)
### Reverse a LinkedList (easy): LC 206
/*
 * creating node class
 */
public class Node<T>
{
    public Node(T data, Node<T> next)
    {
        Data = data;
        Next = next;
    }

    public T Data { get; set; }

    public Node<T> Next { get; set; }

}

/// <summary>
/// Traverses the linkedlist.
/// Set the next pointer of the current node to the previous node to reverse the list in place.
/// </summary>
/// <typeparam name="T"></typeparam>
/// <param name="head"></param>
/// <returns></returns>
public static Node<T> ReverseList<T>(Node<T> head)
{
    //create three pointers
    Node<T> previousNode = null;
    Node<T> currentNode = head;
    Node<T> nextNode = head.Next;

    //reverse the linked list
    while (nextNode != null)
    {
        currentNode.Next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
        nextNode = nextNode.Next;
    }

    currentNode.Next = previousNode;

    head = currentNode;

    return head;

}

### Reverse a Sub-list (medium): LC 92
### Reverse every K-element Sub-list (medium): LC 25
### Problem Challenge 1: new (​link​)
### Problem Challenge 2: LC 61

## Pattern: Tree Breadth First Search (9)
### Binary Tree Level Order Traversal (easy): LC 102
### Reverse Level Order Traversal (easy): LC 107
### Zigzag Traversal (medium): LC 103
### Level Averages in a Binary Tree (easy): LC 637
### Minimum Depth of a Binary Tree (easy): LC 111, LC 104
### Level Order Successor (easy): new (​link​)
### Connect Level Order Siblings (medium): LC 117
### Problem Challenge 1: new (​link​)
### Problem Challenge 2: LC 199

## Pattern: Tree Depth First Search (7)
### Binary Tree Path Sum (easy): LC 112
### All Paths for a Sum (medium): LC 113, LC 257, new (​link​)
### Sum of Path Numbers (medium): LC 129
### Path With Given Sequence (medium): LC 1430
### Count Paths for a Sum (medium): LC 437
### Problem Challenge 1: LC 543
### Problem Challenge 2: LC 124

## Pattern: Two Heaps (4)
### Find the Median of a Number Stream (medium): LC 295
### Sliding Window Median (hard): LC 480
### Maximize Capital (hard): LC 502
### Problem Challenge 1: LC 436

## Pattern: Subsets (9)
### Subsets (easy): LC 78
### Subsets With Duplicates (easy): LC 90
### Permutations (medium): LC 46
### String Permutations by changing case (medium): LC 784
### Balanced Parentheses (hard): LC 22
### Unique Generalized Abbreviations (hard): LC 320
### Problem Challenge 1: LC 241
### Problem Challenge 2: LC 95
### Problem Challenge 3: LC 96

## Pattern: Modified Binary Search (10)
### Order-agnostic Binary Search (easy): new (Approach 1 in ​link​)
### Ceiling of a Number (medium): new (​link​)
### Next Letter (medium): LC 744
### Number Range (medium): LC 34
### Search in a Sorted Infinite Array (medium): LC 702
### Minimum Difference Element (medium): LC 658 (k == 1)
### Bitonic Array Maximum (easy): new (​link​)
### Problem Challenge 1: new (​link​)
### Problem Challenge 2: LC 33, LC 81
### Problem Challenge 3: LC 153, LC 154

## Pattern: Bitwise XOR (4)
### Single Number (easy): LC 136
### Two Single Numbers (medium): LC 260
### Complement of Base 10 Number (medium): LC 476
### Problem Challenge 1: LC 832

## Pattern: Top 'K' Elements (14)
### Top 'K' Numbers (easy): new (​link​)
### Kth Smallest Number (easy): LC 215 (smallest instead of largest)
### 'K' Closest Points to the Origin (easy): LC 973
### Connect Ropes (easy): LC 1167
### Top 'K' Frequent Numbers (medium): LC 347
### Frequency Sort (medium): LC 451
### Kth Largest Number in a Stream (medium): LC 703
### 'K' Closest Numbers (medium): LC 658
### Maximum Distinct Elements (medium): new (​link​)
### Sum of Elements (medium): new (​link​)
### Rearrange String (hard): LC 767
### Problem Challenge 1: LC 358
### Problem Challenge 2: LC 621
### Problem Challenge 3: LC 895
### Pattern: K-way merge (5)
### Merge K Sorted Lists (medium): LC 23
### Kth Smallest Number in M Sorted Lists (Medium): new (​link​)
## Kth Smallest Number in a Sorted Matrix (Hard): LC 378
### Smallest Number Range (Hard): LC 632
### Problem Challenge 1: LC 373 (largest sum instead of smallest sum)

## Pattern : 0/1 Knapsack (Dynamic Programming) (6)
### 0/1 Knapsack (medium): new (​link​)
### Equal Subset Sum Partition (medium): LC 416
### Subset Sum (medium): new (​link​)
### Minimum Subset Sum Difference (hard): new (​link​)
### Problem Challenge 1: new (​link​)
### Problem Challenge 2: LC 494-

## Pattern: Topological Sort (Graph) (7)
### Topological Sort (medium): new (​link​)
### Tasks Scheduling (medium): LC 207
### Tasks Scheduling Order (medium): LC 210
### All Tasks Scheduling Orders (hard): LC 210 (output all possible solutions)
### Alien Dictionary (hard): LC 269
### Problem Challenge 1: LC 444 Problem Challenge 2: LC 310
### Miscellaneous (1)
### Kth Smallest Number (hard): LC 215 (smallest instead of largest)
