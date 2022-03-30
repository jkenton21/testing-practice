const analyzeArray = (thisArray) => {
    if(thisArray.length == 0) {
        return null
    }

    const average = thisArray.reduce((acc, cv) => acc + cv)/thisArray.length;

    const minimum = thisArray.reduce((a, b) => {
        return (b < a) ? b: a;
    })

    const maximum = thisArray.reduce(( a, b) => {
        return (b > a) ? b: a;
    })

    return {
        average: average,
        minimum: minimum,
        maximum: maximum,
        length: thisArray.length
    }

}

module.exports = analyzeArray;