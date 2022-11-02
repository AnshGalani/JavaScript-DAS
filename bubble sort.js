function bubbleSort(arr){
    let i,j;
    let len=arr.length;
    let isSwapped=false;

    for(i=0;i<len;i++){
        for(j=0;j<len;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isSwapped=true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
}

let array=[243,45,23,356,3,5364,35,5];
// let array=[2,1,3,4,5];
console.log("Original unsorted array",array);
bubbleSort(array);
console.log("After sorting",array);