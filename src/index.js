module.exports = function check(str, bracketsConfig) {
    do {
        var strBefore = str;
        for (const [left, right] of bracketsConfig) {
            str = str.replace(`${left}${right}`, '');
        }
    } while (str !== strBefore)

    return !str;
}
/*
module.exports = function check(str, bracketsConfig) {
    return isValidString(str, bracketsConfig.map(([l, r]) => new RegExp(`${escapeSymbols(l)}[^${l + r}]*${escapeSymbols(r)}`, 'g')));
}

let isValidString = (str, delimiters) => {
    if (!str) {
        return true;
    }
    let processedStr = delimiters.reduce((processedStr, regExp) => processedStr.replace(regExp, ''), str);
    return processedStr === str ? false : isValidString(processedStr, delimiters);
}
*/
