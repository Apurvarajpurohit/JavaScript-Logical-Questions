// write a function to check the string is palindrome. also consider only alpahnumeric cahracters

function isPalindrome(str){
    let input = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    console.log(input)
    let reversedString = input.split('').reverse().join('');
    if (input === reversedString){
        return true;
        }
        else return false
}
console.log(isPalindrome("annf45^%54fnna"))