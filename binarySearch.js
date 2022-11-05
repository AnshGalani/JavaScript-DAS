function binarySearch(arr,element){
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(arr[mid]==element){
            return mid;
        } 
        else if(arr[mid]>element){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
}

console.log(binarySearch([4,5,45,89,90],45));