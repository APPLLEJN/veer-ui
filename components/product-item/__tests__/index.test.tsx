import React from 'react'
import { mount } from 'enzyme'
import Tag from '../product-item'

describe('Tag', () => {
  it('render normal Tag correctly', () => {
    const wrapper = mount(<Tag text="Tag1">normal</Tag>)

    expect(wrapper).toMatchSnapshot()
  })
})
