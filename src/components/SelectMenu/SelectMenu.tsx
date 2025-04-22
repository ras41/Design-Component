// components/SelectMenu/SelectMenu.tsx

import React from 'react'
import './SelectMenu.css'
import { SelectMenuProps } from './types'

export const SelectMenu: React.FC<SelectMenuProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  disabled = false,
  error,
  helperText,
  required = false,
}) => {
  return (
    <div className="select-container">
      {label && (
        <label
          htmlFor={id}
          className={`select-label ${disabled ? 'disabled' : ''}`}
        >
          {label} {required && <span style={{ color: '#e74c3c' }}>*</span>}
        </label>
      )}

      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`select-box ${error ? 'error' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {(error || helperText) && (
        <p className={`select-helper ${error ? 'error' : ''}`}>
          {error || helperText}
        </p>
      )}
    </div>
  )
}
