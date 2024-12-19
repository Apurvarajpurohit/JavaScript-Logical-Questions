// function to find largest element in nested array

function findLargestElement(nestedArray) { 

    let largest = nestedArray[0][0]; 
  
    for (let arr of nestedArray) { 
  
      for (let num of arr) { 
  
        if (num > largest) { 
  
          largest = num; 
  
        } 
  
      } 
  
    } 
  
    return largest; 
  
  }
console.log(findLargestElement([[2, 5, 7, 6], [46, 78, 4, 2], [1, 22, 3, 4]]));
