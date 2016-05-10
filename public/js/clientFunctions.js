function clone(src) {
	return JSON.parse(JSON.stringify(src));
}

function toFixed(floatValue, nbDecimal){
    var nb = Math.pow(10, nbDecimal);
    return Math.round(floatValue * nb)/nb;
}