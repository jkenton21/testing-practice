const capitalize = (string) => {
    if (string.length === 0) {
        return ''
    }
    const char = string.toLowerCase();
    return char.charAt(0).toUpperCase() + char.slice(1);
}

module.exports = capitalize;