'use strict';

/**
 * Returns a string of the count and Bet or Hold
 * @param {array} cards - an array of cards
 * @returns {string} - message 
 */
function countCards(cards) {
    let count = 0;

    for(let card of cards) {
        if (card >= 2 && card <= 6) {
            count++;
        } else if (card >= 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
            count--;
        }
    }

    if (count > 0) {
        return count + ' Bet';
    } else {
        return count + ' Hold';
    }
}

//uncomment following test code after implementing the function
console.log(countCards([2, 3, 7, 'K', 'A']));
console.log(countCards([2, 3, 4, 5, 6]));
console.log(countCards([7, 8, 9]));
console.log(countCards([10, 'J', 'Q', 'K', 'A']));
console.log(countCards([3, 7, 'Q', 8, 'A']));
console.log(countCards([2, 2, 10]));
console.log(countCards([2, 9, 'J', 2, 7]));
console.log(countCards([3, 2, 'A', 10, 'K']));