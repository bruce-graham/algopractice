/*! algorithms v0.0.0 - MIT license */
'use strict';

// Reverse the provided string.
const reverseString = function (str) {
  return str.split("").reverse().join("");
};

// Reverse only the vowels in the provided string.
const reverseVowels = function (str) {
  //to be completed
  //---------helper functions
  var swap = function(i, j, array) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }; 
   
  var isVowel = function(letter) {
    var lowercased = letter.toLowerCase();
    var vowels = {a: true, e: true, i: true, o: true, u: true};
    return Boolean(vowels[lowercased]);
  }; 

  var indices = [];
  var sArray = str.split("");
  
  sArray.forEach(function(el, i) {
    if(isVowel(el)) indices.push(i); 
  });
  
  while(indices.length > 1) {
    swap(indices.pop(), indices.shift(), sArray);
  }

  return sArray.join("");
};

// Factorialize a Number
const factorialize = function (num) {
  // your code goes here
  if(num <=1) return 1;
  return num * factorialize(num - 1);
};

/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -. Example: Given a = 1 and b = 2, return 3.
*/
const getSum = function (a, b) {    
  //to be completed
};

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given arr = [2, 7, 11, 15], target = 9,
Because arr[0] + arr[1] = 2 + 7 = 9, return [0, 1].
*/
const twoSum = function (arr, tgt) {
  var results,num,diff = [];
  for (var i = 0, n = arr.length; i < n; i++) {
  //var index = arr.indexOf(tgt - arr[i]);
  //index > -1 && (results = [index, i])
    num = arr[i];
    var diffNum = diff[num];
    (diffNum || diffNum === 0) ? (results = [diffNum, i]) : (diff[tgt - num] = i)
  }
  return results;
};

/*
  Test if a string has all unique characters
  Return a boolean value 
*/

const isUnique = function (s) {
  if(typeof s !== "string") return "Argument is not a string";
  var dict = {};
  for (var i = 0; i < s.length; i++) {
    if(dict[s[i]]) return false;
    else dict[s[i]] = true;
  }
  return true;
}

/*
  Test if a string is a palindrome
  Return a boolean value 
*/


const isPalindrome = function (s) {
  if(typeof s !== "string") return "Argument is not a string";
  if(s.length <= 1) return true;
  for(var i = 0; i < s.length; i++) {
    if(s[i] !== s[s.length -1]) return false;
    else return isPalindrome(s.slice(1,s.length-1));
  }
}


/*
  Test if string 2 is a permutation of string 1
  Return a boolean value 
*/

const isPermutation = function (s1, s2) {
  if(typeof s1 !== "string" || typeof s2 !== "string") return "Argument is not a string";
  if(s2.length > s1.length) return false;

  var dict = {};

  for(var i = 0; i < s1.length; i++) {
    var charS1 = s1[i];
    var charS2 = s2[i];

    //does not work if the s2 > s1 length condition isn't in place
    // dict[charS1] = dict[charS1] + 1 || 1;
    // dict[charS2] = dict[charS2] - 1 || 0;

    
    if(!dict[charS1]) dict[charS1] = 1;
    else { dict[charS1]++; }

    if(i < s2.length) {
      if(!dict[charS2]) dict[charS2] = -1;
      else dict[charS2]--; 
    }
  }

  //  loop over every letter, ineffecient!!
  //   for(var char in dict) {
  //     if(dict[char] < 0) return false;
  //   };

  //loop over only the necessary chars
  for(var j = 0; j < s2.length; j++) {
    if(dict[s2[j]] < 0) return false;
  }

  return true;
}

/*
  Test if a string has a permutation which is a palindrome
  Return a boolean value 
*/
const hasPalindromePermutation = function (str) {
  if(typeof str !== "string") return "Argument is not a string";
  var s= str.toLowerCase();
  
  /* Solution 1
    var lengthIsOdd = Boolean(s.length % 2);
    var dict = {};
    
    for (var i = 0; i < s.length; i++) {
      var char = s[i];
      if(dict[char]) dict[char]--;
      else dict[char] = 1;
    }

    console.log(dict);

    var foundOdd = false;
    for(var char in dict) {
      if(!lengthIsOdd) {
        if(dict[char] !== 0) return false;
      } else {
        if(!foundOdd && dict[char] !== 0) foundOdd = true; 
        else if(foundOdd && dict[char] !== 0) return false;
      }
      console.log(foundOdd);
    }
    return true;
  */

  //Solution 2
  var letterCounts = {};
  var letter;
  var palindromeSum = 0;
  for (var i = 0; i < s.length; i++) {
      letter = s[i];
      letterCounts[letter] = letterCounts[letter] || 0;
      letterCounts[letter]++;
  }
  for (var letterCount in letterCounts) {
      palindromeSum += letterCounts[letterCount] % 2;
  }

  return palindromeSum < 2;

 /* Solution 3 
  var s = s.replace(/\s+/, ''),
      myObj = {},
      shiftPoint = false;

  for (var i = 0; i < s.length; i++) {
      if (myObj[s[i]]) {
          myObj[s[i]]++;
      } else {
          myObj[s[i]] = 1;
      }
  }

  for (var key in myObj) {
      if (myObj[key] % 2 !== 0 && !shiftPoint) {
          shiftPoint = true;
          continue;
      }

      if (myObj[key] % 2 !== 0 && shiftPoint) {
          return false;
      }
  }

  return true;
*/  
}


  
const arraySum = function (arr) {
  //Using a for loop
  var total = total || 0;
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') {
      total += arr[i]
    } else if (Array.isArray(arr[i])) {
      total += arraySum(arr[i], total);
    }
  }
  return total;    
};

  //Using reduce
  /*
  function arraySum(arr) {
    return arr.reduce(function(acc, curr) {
      
      if(Array.isArray(curr)) {
        acc = acc + arraySum(curr)
       } else {
        acc = acc + curr;
      }
      
      return acc;

    }, 0);
  }
  */ 

  //Using ternary 
  /*
  //Below not working
  function arraySum(arr) {
    var total = total || 0;
    for(var i = 0; i < arr.length; i++) {
      return total += ((Array.isArray(arr[i]) ? arraySum(arr[i], total) : arr[i]))
    }
    return total;
  }
  */

const allPermutations = function (s) {
  // body...
  var results = [];
  var recurser = function (combo, rest) {
    if(rest.length === 0) {results.push(combo); return;}
    for(var i = 0; i < rest.length; i++) {
      recurser(combo + rest[i], rest.slice(0,i).concat(rest.slice(i+1)))
    }
  }
  recurser("", s);
  console.log(results);
  return results;
}