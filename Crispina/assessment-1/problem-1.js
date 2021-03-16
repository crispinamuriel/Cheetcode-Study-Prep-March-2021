/*Assessment 1 Problem 1
https://leetcode.com/problems/longest-substring-without-repeating-characters/
3. Longest Substring Without Repeating Characters
Medium

13461

697

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 */

 /*
 sliding window

 create fn
 keep a windowStart
 keep a maxLength

 for(windowEnd)
    keep a hash
    keep a currLength
    while(curr letter is not in hash and we're past the end of the string)
        add currLetter to hash
        compare currLength to maxLength and keep the biggest

    move the window

return maxLength


 */

const lengthOfLongestSubstring = (s) => {

}
console.log(lengthOfLongestSubstring("abcabcbb"));
