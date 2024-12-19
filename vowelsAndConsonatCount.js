//write a javascript function to count vowels and consonant 
function countVowelsAndConsonant(str){
    let vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;
   for (let char of str){
       if (vowels.includes(char)){
           vowelCount++;
         }
       else{
           consonantCount++;
       }
   }
    return {vowelCount, consonantCount}
}
let result=countVowelsAndConsonant("apurvaaaa");
console.log("vowel count is: " + result.vowelCount+ "and consonant count is: " + result.consonantCount)
