// write a function to check weather two strings are analgram

function checkAnalgram(str1,str2){
    let input = (str)=> str.replace(/[^\w+]/g,'').toLowerCase();
    if (input(str1).split('').sort().join('')===input(str2).split('').sort().join('') )
    {
        return true
    }
else return false
    
}
console.log( checkAnalgram("feeg","gfee"))