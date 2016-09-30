/*! algorithms v0.0.0 - MIT license */
'use strict';

// Reverse the provided string.
const reverseString = function (str) {
  var revStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};

// Reverse only the vowels in the provided string.
const reverseVowels = function (str) {
  // your code goes here
};

// Factorialize a Number
const factorialize = function (num) {
  var total = 1;
  for (var i = 2; i <= num; i++) {
    total = total * i;
  }
  return total;
};

/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -. Example: Given a = 1 and b = 2, return 3.
*/
const getSum = function (a, b) {
  var collection = [a,b];
  return collection.reduce(function (accumulator, item) {
    return item;
  });
};

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution. Example: Given arr = [2, 7, 11, 15], target = 9,
Because arr[0] + arr[1] = 2 + 7 = 9, return [0, 1].
*/
const twoSum = function (arr, tgt) {
  // your code goes here
};

/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/
const singleNumber = function (arr) {
  // your code goes here
};

//it should take a string and repeat it a number of times
const repeat = function (str, count) {
  // your code goes here
};

/*
 ***THIS MIGHT BE AN OUT OF SCOPE PROBLEM IF YOU ARE A FULCRUM STUDENT***
 Create data structuce called Union-Find.
 Given a set of 'n' objects.  The interface is as follows
・Union command: connect two objects.
・Connected query: is there a path connecting the two objects?
 See test cases to develop the data structure
*/

const UF = function (n) {
  // your code goes here
};

/*
  Test if a string has all unique characters
  Return a boolean value
*/

const isUnique = function (s) {
  // your code goes here
};

/*
  Test if a string is a palindrome
  Return a boolean value
*/

const isPalindrome = function (s) {
  // your code goes here
};

/*
  Test if string 2 is a permutation of string 1
  Return a boolean value
*/

const isPermutation = function (s1, s2) {
  // your code goes here
};

/*
  Test if a string has a permutation which is a palindrome
  Return a boolean value
*/

const hasPalindromePermutation = function (str) {
  // your code goes here
};

/*
  Given an array with sub-arrays, all of which hold numbers, return the sum
  of all the numbers in the array
*/

const arraySum = function (arr) {
  // your code goes here
};
