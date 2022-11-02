function selectonSort(arr){
    let i,j,min_index;
    let len=arr.length;

    //Running the iteration
    for(i=0;i<len-1;i++){
        //Considering i'th element to be smallest
        min_index=i;
        for(j=i+1;j<len;j++){
            if(arr[j]<arr[min_index]){
                min_index=j;
            }
        }
        swap(arr,min_index,i);
    }
}

function swap(arr,p,q){
    let temp=arr[p];
    arr[p]=arr[q];
    arr[q]=temp;
}

let arr=[4,2,5,10,25,6];
console.log("Original Unsorted array",arr);
selectonSort(arr);
console.log("Sorted array",arr);