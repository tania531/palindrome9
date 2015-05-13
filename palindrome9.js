var string = "stash and pop on this level";
var words = string.split(" ");
var palindromes = [];

words.map(checkPalindrome);

function checkPalindrome(str) {
    palindromes.push(str === str.split('').reverse().join(''));
}

console.log('palindromes: ', palindromes);
