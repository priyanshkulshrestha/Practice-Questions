# Given a matrix:
# 1,0,0,0,0
# 0,0,1,0,1
# 0,1,1,1,1
# 0,0,0,1,0
# 1,0,0,0,1
# 
# find the maximum number of shaded cells (represented by 1) that share an edge with each other.
# eg. in the case above there are 7 cells that contains 1 and share an edge with each other
#
# Read from stdio. eg input
# {1,0,0,0,0},{0,0,1,0,1},{0,1,1,1,1},{0,0,0,1,0},{1,0,0,0,1}


def largestAdjacent(matrix):
    maximum = 0
    rows = len(matrix)
    cols = len(matrix[0])
    # maximum = traverseNeighbours(matrix, 1, 2, rows, cols)    
    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == 1:
                maximum = max(maximum, traverseNeighbours(matrix, r, c, rows, cols))
    
    return maximum

def traverseNeighbours(matrix, r, c, rows, cols):
    total_neighbours = 1

    # first mark current node as seen.
    matrix[r][c] = 2

    # check top neighbour
    if r != 0 and matrix[r-1][c] == 1:
        total_neighbours += traverseNeighbours(matrix, r-1, c, rows, cols)
    
    # check left neighbour
    if c != 0 and matrix[r][c-1] == 1:
        total_neighbours += traverseNeighbours(matrix, r, c-1, rows, cols)
    
    # check right neighbour
    if c < cols - 1 and matrix[r][c+1] == 1:
        total_neighbours += traverseNeighbours(matrix, r, c+1, rows, cols)
    
    # check bottom neighbour
    if r < rows - 1 and matrix[r+1][c] == 1:
        total_neighbours += traverseNeighbours(matrix, r+1, c, rows, cols)
        
    return total_neighbours


if __name__ == '__main__':
    M = input().strip('{').strip('}').split('},{')
    matrix = [map(int,x.split(',')) for x in M]
    print ("Max Count:", largestAdjacent(matrix))