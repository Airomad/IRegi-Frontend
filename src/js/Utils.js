function $$() {
    var str = ''
    for (var i = 0; i < arguments.length; i++)
        str += arguments[i] + ' '
    return str
}

module.exports = $$
