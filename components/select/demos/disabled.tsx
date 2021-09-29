import React from 'react'
import { Select } from 'veer-ui'
import 'veer-ui/dist/index.css'

export default () => (
  <div>
    <Select placeholder="禁用" disabled>
      <Select.Option value="item1" />
      <Select.Option value="item2" />
      <Select.Option value="item3" />
    </Select>
  </div>
)
