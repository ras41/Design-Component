
import React, {JSX} from 'react'
import './Typography.css'
import { TypographyProps } from './types'
import clsx from 'clsx'

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
}) => {
  const Tag = variant.startsWith('h') ? (variant as keyof JSX.IntrinsicElements) : 'p'

  return (
    <Tag className={clsx('typography', variant, className)}>
      {children}
    </Tag>
  )
}
