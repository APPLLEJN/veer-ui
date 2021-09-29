import React from 'react'
import { ProductItem } from 'veer-ui'
import 'veer-ui/dist/index.css'

export default () => {
  const handleClick = () => {
    console.log('close')
  }

  return (
    <>
      <ProductItem title="【过山车】侏罗纪公园大冒险" content="【过山车】侏罗纪公园大冒险" time={10} onClose={handleClick} />
    </>
  )
}
