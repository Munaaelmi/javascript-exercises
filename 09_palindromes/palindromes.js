const palindromes = function (str) {
  if (str.includes("!")) {
    let punctuation = str.slice(-1);
    let newWord = str.split("").reverse().join("").slice(1) + punctuation;
    return newWord.toLowerCase() == str.toLowerCase();
  }

  return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
