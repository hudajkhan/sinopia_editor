// Copyright 2018 Stanford University see Apache2.txt for license

import React from 'react'
import { shallow } from 'enzyme'
import CanvasMenu from '../../src/components/CanvasMenu'

describe('<CanvasMenu />', () => {
  const wrapper = shallow(<CanvasMenu />)
  it ('renders multiple menu-items', () => {
    expect(wrapper.find("a.menu-item")).toBeDefined()
  })

  it('renders the FontAwesome arrow icon', () =>{
    expect(wrapper.find(".arrow-icon")).toBeDefined()
  })

  it('renders the FontAwesome closes icon', () =>{
    expect(wrapper.find(".close-icon")).toBeDefined()
  })

  it('checks if links with target="_blank" also have rel="noopener noreferrer"', () => {
    wrapper.find('a[target="_blank"]').forEach((node) => {
      expect(node.prop('rel')).toEqual("noopener noreferrer")
    })
  })
  
})
