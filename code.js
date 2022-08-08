/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const HashTab = {};
    for (let i = 0; i < s.length; i++) {
        const chars = s[i];
        HashTab[chars] = HashTab[chars] + 1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        const chars = s[i];
        if (HashTab[chars] === 1) {
            return i;
        }
     }
     return -1; 
};
