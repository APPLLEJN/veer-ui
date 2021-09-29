import React from 'react'
import { Button } from 'veer-ui'
import 'veer-ui/dist/index.css'

export default () => (
  <div id="components-button-demo-shape">
    <Button type="info" disabled>
      不可用按钮
    </Button>
    <Button type="danger" disabled>
      不可用按钮
    </Button>
    <Button type="link" disabled>
      不可用按钮
    </Button>
  </div>
)
