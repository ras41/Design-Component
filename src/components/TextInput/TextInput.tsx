// components/TextInput/TextInput.tsx

import React from 'react'
import './TextInput.css'
import { TextInputProps } from './types'

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  helperText,
  required = false,
  type = 'text',
}) => {
  return (
    <div className="text-input-container">
      {label && (
        <label
          htmlFor={id}
          className={`text-input-label ${disabled ? 'disabled' : ''}`}
        >
          {label} {required && <span style={{ color: '#e74c3c' }}>*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`text-input-box ${error ? 'error' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      />
      {(error || helperText) && (
        <p className={`text-input-helper ${error ? 'error' : ''}`}>
          {error || helperText}
        </p>
      )}
    </div>
  )
}
