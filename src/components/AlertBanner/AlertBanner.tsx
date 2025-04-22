// components/AlertBanner/AlertBanner.tsx

import React from 'react'
import './AlertBanner.css'
import { AlertBannerProps } from './types'

export const AlertBanner: React.FC<AlertBannerProps> = ({
  message,
  variant,
  closable = false,
  onClose,
}) => {
  return (
    <div className={`alert-banner ${variant}`} role="alert">
      <span className="message">{message}</span>
      {closable && (
        <button className="close" onClick={onClose} aria-label="Close alert">
          ✕
        </button>
      )}
    </div>
  )
}
