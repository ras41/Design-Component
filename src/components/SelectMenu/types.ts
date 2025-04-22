export interface Option {
  label: string
  value: string
}

export interface SelectMenuProps {
  id: string
  label?: string
  options: Option[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
  error?: string
  helperText?: string
  required?: boolean
}
