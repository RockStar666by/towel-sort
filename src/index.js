// You should implement your task here.

module.exports = function towelSort(matrix) {

    let arr = [];
    if (matrix == undefined) return arr;
    for (i = 0; i < matrix.length; i += 2) {
        matrix[i].forEach(element => arr.push(element));
        if (matrix[i + 1] == undefined) break;
        matrix[i + 1].sort((a, b) => (b - a)).forEach(element => arr.push(element));
    }
    return arr;
}