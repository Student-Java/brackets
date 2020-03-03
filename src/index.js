module.exports = function check(str, bracketsConfig) {
    while (str) {
        let initialLength = str.length;

        for (const [left, right] of bracketsConfig) {
            str = str.replace(RegExp(`${escapeRegExpSymbols(left)}${escapeRegExpSymbols(right)}`, 'g'), '');
        }

        if (initialLength === str.length) {
            return false;
        }
    }

    return true;
}

let escapeRegExpSymbols = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
