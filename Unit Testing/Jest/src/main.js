
function sum(a,b) {
    if (isNaN(a) || isNaN(b)) {
        return;
    }
    return a + b;

}

module.exports = sum;