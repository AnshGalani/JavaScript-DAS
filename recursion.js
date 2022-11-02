// //---------------------Print 1 to N number using recursion---------------------------
// function recursive(n)
// {
//     if(n==-1){
//         return;
//     }

//     recursive(n-1);
//     console.log('The Number is ',n);
// }

// recursive(10);

//---------------------------Find Factorial usinng the recursion----------------------------------------

function factorial(x){
    if(x===0){
        return 1;
    }
    else{
        return x*factorial(x-1);
    }
}

const num=3;

if(num>0){
    let result=factorial(num);
    console.log(`The Factorial of ${num} is ${result}`);
}

//----------------------------JavaScript Program to Display Fibonacci Sequence Using Recursion-------------------------------

// function fibonacci(n){
//     if(n<2) return n
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// const num=7;

// for (let i=0;i<num;++i){
//     console.log(fibonacci(i));
// }

//------------------Write a JavaScript program to get the integers in range (x, y) using recursion.---------------------------

// function range(start_num, end_num) {
//     if (end_num - start_num === 0) 
//     {
//       return [start_num];
//     } 
//     else 
//     {
//       let list = range(start_num, end_num - 1);
//       list.push(end_num );
//       return list;
//     }
//   };
  
//   console.log(range(3,7));

