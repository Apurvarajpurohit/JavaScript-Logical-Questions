// program to count words of a string

function countWord(str){
    let input = str.trim().split(/\s+/);
    return input.length
}

console.log(countWord(" hello apurva"))