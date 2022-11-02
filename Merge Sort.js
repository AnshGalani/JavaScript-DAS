function mergeSort(arr){
    const half=arr.length/2;
    if(arr.length<=1){
        return arr;
    }

    const left=arr.splice(0,half);
    const right=arr;

    let leftSortedArray=mergeSort(left);
    let rightSortdArray=mergeSort(right);

    return merge (leftSortedArray,rightSortdArray);
}

function merge(left,right){
    let sortedArray=[];

    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArray.push(left.shift());
        }
        else{
            sortedArray.push(right.shift());
        }
    }
    // while(left.length){
    //     sortedArray.push(left.shift());
    // }
    // while(right.length){
    //     sortedArray.push(right.shift());
    // }
    // return sortedArray;
    return [...sortedArray, ...left, ...right];
}

let array=[45,10,2,6,75,50];
console.log('Orignale Unsorted array',array)
let result=mergeSort(array);
console.log("Sorted Array",result);