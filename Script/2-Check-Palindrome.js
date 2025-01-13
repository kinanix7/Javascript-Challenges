function isPalindrome(str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    var reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("level")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("hello"));