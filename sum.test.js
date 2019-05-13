'use strict'

/*describe('# ESCOPO', () => {
    it('Testando jest', () => {

    })
})

describe('# ESCOPO 2', () => {
    it('Testando jest 2', () => {
        console.assert(1 === 1)
    })
})
it('Um é igual a 1', () => {
    expect(1).toBe(1)
})*/

const expect = require('chai').expect
const { sum } = require('./sum')

it('sum should be a function', () => {
    expect(sum).to.be.a('function')
})
