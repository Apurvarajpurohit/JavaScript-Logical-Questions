// function to find weather given number is prime

function isPrime(num){
    if (num <= 1){
        return false;
    }
     for (let i =2; i<=Math.sqrt(num); i++){
        if (num%i===0){
            return false
        }
        else return true
     }
    
    }
    console.log(isPrime(6))