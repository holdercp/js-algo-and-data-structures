# Sorting Alogrithms

Rearranging data in a certain way.

## Why learn this?

- Data will need to be sorted at some point.
- Understanding the strengths and weaknesses of different sorting algo's will allow you to make the right call when choosing what sorting method to use based on your goals.

## Objectives

- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it's important to use these

## Built-in JS sort

- Sorts on unicode value
- Almost always needs a custom sorting function

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Bubble sort

- Not the greatest... there's almost always a better option

### Pseudo

1. Loop through the given array
1. Compare the value at the current index with each other value in the array (nested loop)
1. If `current` is greater than `next`, swap and continue to the next iteration of the outer loop
1. Else, compare to the next iteration of the inner loop

## Selection sort

- Similar to bubble sort but it sorts the smallest values first
- O(n^2)

### Pseudo

1. Move from beginning to end and keep track of the smallest value as you go
1. Once you go through the length of the array, swap the current minimum with the starting

## Insertion Sort

- Works by inserting each element into its sorted position in a progressively sorted portion of the array.
- O(n^2)
- Works well for nearly sorted data.
- Is an "online" sorting algo, meaning data can be streamed in at runtime and it will still be correct.

### Pseudo

1. Start with the second item in the array
2. Iterate through the items to the left of the items
3. Compare the current item with the each item in the left portion
4. If `current` is greater than or equal to the current left-item, go to 6
5. Else, repeat 3-4 with the next item to the left
6. Set the new current item as the next item to the right

## Comparing the three

- Bubble sort is probably the worst
- Selection sort is ok
- Insertion sort is best when used on a partially sorted array

## Merge Sort

- Divide and conquer element
- Takes advantage of the fact that a array of 0 or 1 length is already sorted
- Splits into subsets of length 1 then compares subsets and sorts them recursively
- Helpful to create a merge helper that is responsible for merging to arrays and returning the sorted combination of them

### Pseudo

- Base case: if arr is length of 1 or less, return
- Split the given array at the midpoint
- Call `merge` on the recursive call of `mergeSort` on the left slice with the recursive call of the right
- Return the result

### Time and space complexity

- O(n log n)
- Space complexity is O(n)

### Merge Helper

#### Pseudo

1. Create an empty array, and look at the smallest values in each argument array
2. While either array have untouched values...
3. If arg1 value is smaller, push it to the target array and move on to the next element in arg1
4. If arg1 value is larger, push the arg2 value to the target array and move on to the next element in arg2
5. If one arg has no more values, push the remaining values in the other arg to the target array

## Quick Sort

Pick a pivot item and move all the items less than the pivot item to the left of it, and move all the items larger than it to the right. Then repeat the same process of the left and the right until the subarray is a length of 1 or 0 (sorted).

Helpful to write a partition helper.

### Pseudo

1. Take in an array and a start and end index
2. If the start is less than the end do 3-4, else goto 6
3. Call the partition helper to get the pivot index
4. Call quicksort recursively with the start and up to the pivot point
5. Call quicksort recursively with the pivot point plus one and the end of the array
6. Return the array

### Big O

- O(n^2) because worst case is an already sorted array so no division occurs.
- Average and better is O(n log n)

### Partition Helper

1. Take an array as an argument
2. Store the pivot value
3. Store the pivot index (use 0)
4. Loop through the array
5. If the pivot value is greater than the current value, increment the pivot index and swap the current value with the value at the new pivot index
6. After the loop is done, swap the pivot value with the value at the pivot index
7. Return the pivot index

## Radix Sort

- Doesn't make comparisons
- Works on numbers only
- Exploits the fact that infromation about the size of the number is encoded in the digits (more digits means a bigger number)
