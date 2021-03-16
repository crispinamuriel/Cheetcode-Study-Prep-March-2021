# Topological Sort 

```python
from collections import deque

def topological_sort(vertices, edges):
  sortedOrder = []
  if vertices <= 0:
    return sortedOrder

  inDegree = {i: 0 for i in range(vertices)}  # count of 
  graph = {i: [] for i in range(vertices)}  # adjacency list 

  for edge in edges:
    parent, child = edge[0], edge[1]
    graph[parent].append(child)  # put the child into it's parent's list
    inDegree[child] += 1  # increment child's inDegree

  sources = deque()

  for key in inDegree:
    if inDegree[key] == 0:
      sources.append(key)

  while sources:
    vertex = sources.popleft()
    sortedOrder.append(vertex)
    for child in graph[vertex]: 
      inDegree[child] -= 1
      if inDegree[child] == 0:
        sources.append(child)

  if len(sortedOrder) != vertices:
    return []

  return sortedOrder

def main():
  print("Topological sort: " +
        str(topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])))
  print("Topological sort: " +
        str(topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])))
  print("Topological sort: " +
        str(topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])))


main()

```