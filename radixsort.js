function radixSort(arr){
    let max=Math.max(...arr);
    let exp=1;

    while(exp<=max){
        countingSort(arr,exp);
        exp=exp*10;
    }
}

function countingSort(arr,exp){
    let count=[];
    let k=10;
    for(let i=0;i<k;i++){
        count[i]=0;
    }
    for(let i=0;i<arr.length;i++){
        count[parseInt((arr[i]/exp)%10)]++;
    }
    for(let i=1;i<k;i++){
        count[i]=count[i-1]+count[i];
    }
    let output=[];

    for(let i=arr.length-1;i>=0;i--){
        output[count[parseInt(arr[i]/exp)%10]-1]=arr[i];
        count[parseInt(arr[i]/exp)%10]--;
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=output[i];
    }
}

let arr=[489,1,0,23,45];
radixSort(arr);
console.log(arr);