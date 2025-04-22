// components/AlertBanner/types.ts

export type AlertVariant = 'success' | 'error' | 'info' | 'warning'

export interface AlertBannerProps {
  message: string
  variant: AlertVariant
  closable?: boolean
  onClose?: () => void
}
