import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import { Input } from 'veer-ui'
import 'veer-ui/dist/index.css'

export default () => (
  <div>
    <Input icon={<CaretDownOutlined />} />
  </div>
)
