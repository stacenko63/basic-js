import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  {
    let arr = new Array(matrix.length);
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = new Array(matrix[0].length);
    }
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            let count = 0;
            if (matrix[i][j] == true) arr[i][j] = 1;
            else if (matrix[i][j] == false)
            {
                if (i != 0 && matrix[i-1][j] == true) count++;
                if (i < matrix.length-1 && j < matrix[i].length-1 && matrix[i+1][j+1] == true) count++;
                if (i < matrix.length-1 && j != 0 && matrix[i+1][j-1] == true) count++;
                if (i != 0 && j != 0 && matrix[i-1][j-1] == true) count++;
                if (i != 0 && j < matrix[i].length-1 && matrix[i-1][j+1] == true) count++;
                if (i < matrix.length-1 && matrix[i+1][j] == true) count++;
                if (j < matrix[i].length-1 && matrix[i][j+1] == true) count++;
                if (j != 0 && matrix[i][j-1] == true) count++;
                arr[i][j] = count;
            }
        }
    }
    return arr;
}
}
