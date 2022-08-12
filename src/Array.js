/**
 * @template T
 * @param {(value: T, index: number, array: T[]) => void} callbackfn
 * @param {any} thisArgs
 */
Array.prototype.forEach = function(callbackfn, thisArgs) {
    for (var i = 0; i < this.length; i++) {
        callbackfn.call(thisArgs, this[i], i, this);
    }
}
