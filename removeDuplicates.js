// program to remove duplicates from string
function removeDuplicates(str){
    return [...new Set(str)].join('');
}
console.log(removeDuplicates("apurrvaa"))