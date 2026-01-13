const gTask = (arr: number[]): number => {
    let high = arr[0];
    let highestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
            highestIndex = i;
        };
    };
    return highestIndex;
};


console.log(gTask([1,2,4,5,22,3,4,2,22]));