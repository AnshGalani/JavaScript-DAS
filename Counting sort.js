function countingSort(arr,k){
    let count=[]; // count array. Length was the range

    for(let i=0;i<k;i++){
        count[i]=0;
    }

    for(let i=0;i<arr.length;i++){
        count[arr[i]]++;
    }

    for(let i=1;i<k;i++){
        count[i]=count[i-1]+count[i];
    }

    let  output=[]// size is same as original array
    for(let i=arr.length-1;i>=0;i--){
        output[count[arr[i]]-1]=arr[i];
        count[arr[i]]--;
    }

    for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
    }
}

let arr=[0,1,0,0,4,3,1,5,6];
countingSort(arr,7);
console.log(arr);