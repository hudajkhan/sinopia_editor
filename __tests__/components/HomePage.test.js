// Copyright 2018 Stanford University see Apache2.txt for license

import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '../../src/components/HomePage'
import Header from '../../src/components/Header'
import NewsPanel from '../../src/components/NewsPanel'
import DescPanel from '../../src/components/DescPanel'


describe('<HomePage />', () =>{
  it('selectable by id "home-page"', () => {
    expect(shallow(<HomePage />).is('#home-page')).toBe(true)
  })

  it('renders four <HomePage /> components', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper.find(Header).length).toBe(1)
    expect(wrapper.find(NewsPanel).length).toBe(1)
    expect(wrapper.find(DescPanel).length).toBe(1)
  })

})
