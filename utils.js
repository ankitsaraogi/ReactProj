export const generateIds = function(noOfIds, startingId=1, arr=[]) {
    for (let i = 0; i < noOfIds; i++) {
        arr.push(startingId++);
    }

    return arr;
}