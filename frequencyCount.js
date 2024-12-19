
function frequencyCount(str){
    let result = {}
    for (let char of str){
    
        if (result[char]){
            result[char]++
        }
        else result[char]=1
    }

    return result
}
console.log(frequencyCount("apurva"))