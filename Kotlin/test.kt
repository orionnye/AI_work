

import shuffleValues// This is a Kotlin file.

fun main() {
    println("Hello, world!")
    val input: List<Int> = mutableListOf(1, 2, 3, 4, 5, 6)
    val shuffledList = shuffleValues(input)
    println(shuffledList) 

    val sortedChunks = findSortedChunks(shuffledList)
    println("Sorted Chunks: $sortedChunks")
}
// pass in array of ints
fun shuffleValues(input: List<Int>): List<Int> {
  return input.shuffled()
}

fun findSortedChunks(shuffledList: List<Int>): List<List<Int>> {
    val sortedChunks = mutableListOf<List<Int>>()
    var chunkStart = 0

    for (i in 1 until shuffledList.size) {
        if (shuffledList[i] < shuffledList[i - 1]) {
            // End of a sorted chunk
            sortedChunks.add(shuffledList.subList(chunkStart, i))
            chunkStart = i
        }
    }

    // Add the last chunk (if any)
    if (chunkStart < shuffledList.size) {
        sortedChunks.add(shuffledList.subList(chunkStart, shuffledList.size))
    }

    return sortedChunks
}