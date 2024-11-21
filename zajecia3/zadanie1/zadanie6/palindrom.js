function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  console.log(isPalindrome("Kajak"));
  console.log(isPalindrome("hello"));                      
  console.log(isPalindrome("racecar"));                    
  console.log(isPalindrome("madam"));                  