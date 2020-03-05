module.exports = function check(str, bracketsConfig) {
    return isValidString(str, bracketsConfig.map(([l, r]) => new RegExp(`${escapeSymbols(l)}[^${l + r}]*${escapeSymbols(r)}`, 'g')));
}

let isValidString = (str, delimeters) => {
    if (!str) {
        return true;
    }
    let processedStr = delimeters.reduce((processedStr, regExp) => processedStr.replace(regExp, ''), str);
    return processedStr === str ? false : isValidString(processedStr, delimeters);
}

let escapeSymbols = (str) => str.replace(/[.*+?^${}()|\\]/g, '\\$&');
