// function to capitalize first letter of each word of a given sentense

function capitalizeTitle(words){
    let input = words.split(" ");
    let result =input.map(word=>word.slice(0,1).toUpperCase()+word.slice(1));
    return result.join(" ");
}

console.log(capitalizeTitle("hello how are you"))