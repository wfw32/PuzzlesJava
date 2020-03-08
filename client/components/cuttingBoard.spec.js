/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CuttingBoard from './cuttingBoard'

const adapter = new Adapter()
enzyme.configure({adapter})

// describe('CuttingBoard', () => {
//   let cuttingBoard

//   beforeEach(() => {
//     cuttingBoard = shallow(<CuttingBoard />)
//   })

//   it('renders a cuttingBoard in h3 tags', () => {
//     expect(cuttingBoard.find('h3').text()).to.be.equal('Your Cutting Board:')
//   })
// })
