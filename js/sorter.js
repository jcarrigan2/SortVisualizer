/*
 * Returns a random integer between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
	let r = Math.random();
    return Math.floor(Math.random() * (max - min) + min);
}

/*
 * This function generates an array of random integers of length n
 * up to a maximum value of n
 */
function generateRandomArray(n){
	let arr = []
	// create n random integers of maximum value n
	for(i=0;i<n;i++){
		arr[i]=getRandomInt(1, n+1);
	}
	return arr;
}

/*
 * Performs a MergeSort on the provided array and returns a new, ascendingly sorted
 * array.
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let midIndex = Math.floor(arr.length / 2);

    let leftHalf = arr.slice(0, midIndex);
    let rightHalf = arr.slice(midIndex);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

/*
 * Merges two sorted arrays into one larger sorted array, which it returns. 
 */
function merge(arr1,arr2){
	let merged = [];
    merged = arr1.concat(arr2);
	return merged;
}