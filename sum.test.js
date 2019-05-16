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

import { expect } from 'chai'
import sum from './sum'
import div from './div'

it('sum should be a function', () => {
    expect(sum).to.be.a('function')
})

it('sum(1,2) should return 3', () => {
    expect(sum(1,2)).to.be.equal(3)
})