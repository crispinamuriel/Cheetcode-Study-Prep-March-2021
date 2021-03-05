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