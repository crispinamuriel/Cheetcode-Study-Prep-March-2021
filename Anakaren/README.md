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

/*
*   Valid Palindrome
*   QUESTION: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*   APPROACH: Create two pointers at opposite ends of the array (string) and if they're not equal, return false
*/

public static bool StringAPalindrome(string input)
{
    //validate input
    if(string.IsNullOrEmpty(input))
    {
        return false;
    }

    //change input to lowercase
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
