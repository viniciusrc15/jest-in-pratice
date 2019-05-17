'use strict'

import { expect } from 'chai'
import map from './map'

it('map is a function', () => {
    expect(map).to.be.a('function')
})

it('map([1,2], (item) => item) should return [1,2]', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([3,4], (item) => item) should return [3,4]', () => {
    expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('map([3,4], (item, index) => index) should return [0,1]', () => {
    expect(map([3, 4], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([3,4], (item, index, array) => array) should return [[3,4],[3,4]]', () => {
    expect(map([3, 4], (item, index, array) => array)).to.be.deep.equal([[3,4],[3,4]])
})

/*it('map([3,4]) should throw an error with message "Function must be passed"', () => {
    expect(map[3, 4]).to.throw("Function must be passed")
})*/

it('map([3,4]) should return [3,4]', () => {
    expect(map([3, 4])).to.be.deep.equal([3, 4])
})

it('map() shoul return []', () => {
    expect(map()).to.be.deep.equal([])
})


