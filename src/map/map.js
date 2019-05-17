'use strict'

export default function map(arr = [], func = (item) => item) {
    /*if(!Array.isArray(arr))
        throw new TypeError('Array must be passed')

    if (!func || typeof func !== 'function')
        throw new TypeError('Function must be passed')*/

    let newarray = []
    for (let i = 0; i < arr.length; i++) {
        newarray.push(func(arr[i], i, arr))
    }
    return newarray
}