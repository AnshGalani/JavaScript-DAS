function insertionsort(arr){
    let i,j,key;

    for(i=1;i<arr.length;i++){
        key=arr[i];
        j=i-1;

        //i May have to  move element to mack my 0 to i sorted.
       
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;

    }
}

let arr=[11,12,5,6];
console.log("Original array",arr);
insertionsort(arr);
console.log("Sorted array",arr);