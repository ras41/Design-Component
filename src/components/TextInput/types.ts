
export interface TextInputProps {
    id: string
    label?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    disabled?: boolean
    error?: string
    helperText?: string
    required?: boolean
    type?: string
  }
  