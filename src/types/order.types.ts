export interface Order {
  name: string
  phone: number
  typeOfDelivery: string
  address?: string
  typeOfPayment: string
  imageVoucher?: File
  notes?: string
}

export interface Voucher {
  nOrden: string
  phone: number
  name: string
  payment: string
  delivery: string
  address?: string
  notes?: string
}
