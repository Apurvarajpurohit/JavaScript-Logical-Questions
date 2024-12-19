// function to find fibionicci series of a given element 
function Fibonacci(num){
    let series = [0,1];
    if (num <=1){
     return series
    }
    for (let i=2;i<=num;i++){
     series.push(series[i-2]+series[i-1])
    }
    return series
 }
 
 console.log(Fibonacci(0)); // [0]
 console.log(Fibonacci(1)); // [0, 1]
 console.log(Fibonacci(5)); // [0, 1, 1, 2, 3, 5]