const mostFrequent = (arr: number[]): number | null => {
    if (arr.length === 0) return null;

    const freq: { [key: number]: number} = {};
    let maxCount = 0;
    let result = arr[0];

    for (const num of arr) {
        freq[num] = (freq[num] ?? 0) + 1;

        if (freq[num] > maxCount) {
            maxCount = freq[num];
            result = num;
        }
    }

 return result;
}


console.log(mostFrequent([1,2,4,5,43,3,3,3,4,4,4,6,6,6,6,6,6]));