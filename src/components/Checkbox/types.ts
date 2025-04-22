
export interface CheckboxProps {
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
    disabled?: boolean
    helperText?: string
    id?: string
  }
  