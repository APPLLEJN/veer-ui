import React, { FC, useState } from 'react'
import classNames from 'classnames'
import CloseOutlined from '@ant-design/icons/CloseOutlined'
import Transition from '../transition'

export type ColorProps = 'primary' | 'success' | 'warning' | 'danger'

export interface TagProps {
  /** 自定义类名 */
  className?: string
  /** Tag的主题色 */
  color?: ColorProps
  /** Tag的尺寸 */
  size?: 'lg' | 'sm'
  /** Tag的文本 */
  title: string
  content: string
  time: number
  /** 关闭Tag */
  onClose?: () => void
  /** 是否显示关闭图标 */
  closable?: boolean
}

export const ProductItem: FC<TagProps> = props => {
  const [hide, setHide] = useState<boolean>(false)
  const { className, color, size, title, content, time, onClose, closable, ...restProps } = props
  const classes = classNames('mk-product-item', className)
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-left">
      <div className={classes} {...restProps}>
        <div className="mk-product-item-image-wrapper">
          <img src="https://qvcdn.veervr.tv/5a9225122d674d4e9c59c4dbd839ef55.png-video.medium?sign=cf73618844f1e722f381fe7a4c2b6939&t=6154fe00" alt="" />
          <span className="mk-product-item-time">{time}分钟</span>
        </div>
        <div className="mk-product-item-content-wrapper">
          <p className="mk-product-item-content-title">{title}</p>
          <p className="mk-product-item-content">{content}</p>
        </div>
      </div>
    </Transition>
  )
}

ProductItem.defaultProps = {
  color: 'primary',
  closable: false,
}

export default ProductItem
