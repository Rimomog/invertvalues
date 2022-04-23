function invert(array) {
    return array.map( e => e < 0 ? Math.abs(e) : -e)
}