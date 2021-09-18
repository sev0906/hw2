const findLongestWord = function (string) {
    let arr = string.split(' ');
    let longWord = arr[0];
    for (let word of arr) {
        if (longWord.length< word.length) {
            longWord = word;
        }
    }
    return longWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
