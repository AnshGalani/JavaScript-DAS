function quicksort(arr,left,right){
    if(left<right){
        let p=partition(arr,left,right);
        quicksort(arr,left,p-1);
        quicksort(arr,p+1,right);
    }
}

function partition(arr,left,right){
    let pivot=arr[right]; //last Element
    
    let i=left-1;

    for(let j=left;j<=right-1;j++){
        if(arr[j]<pivot){
            i++;
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
    }
    let temp=arr[i+1];
    arr[i+1]=arr[right];
    arr[right]=temp;

    return i+1;
}

let arr=[45,20,6,40,9,1,3];
quicksort(arr,0,arr.length-1);
console.log(arr);
