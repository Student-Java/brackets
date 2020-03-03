module.exports = function check(str, bracketsConfig) {
    return isValidString(str, bracketsConfig.map(([l, r]) => [escapeRegExpSymbols(l), escapeRegExpSymbols(r)]));
}

let isValidString = (str, delimeters) => {
    if (!str) {
        return true;
    }
    let processedStr = vanishDelimiters(str, delimeters);
    return processedStr === str ? false : isValidString(processedStr, delimeters);
}

let vanishDelimiters = (str, delimeters) => delimeters.reduce((processedStr, [l, r]) => processedStr.replace(RegExp(`${l}${r}`, 'g'), ''), str);

let escapeRegExpSymbols = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
