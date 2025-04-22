
import React from 'react'
import './Checkbox.css'
import { CheckboxProps } from './types'

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  helperText,
  id,
}) => {
  const checkboxId = id || `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={checkboxId}
        className="checkbox-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <label htmlFor={checkboxId}>
        <div className="checkbox-label">{label}</div>
        {helperText && <div className="checkbox-helper">{helperText}</div>}
      </label>
    </div>
  )
}
