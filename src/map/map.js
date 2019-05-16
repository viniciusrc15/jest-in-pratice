'use strict'

export default function map(arr, func) {
    let newarray = []
    for (let i = 0; i < arr.length; i++) {
        newarray.push(func(arr[i]))
    }
    return newarray
}