export interface Order {
  name: string
  phone: number
  typeOfDelivery: string
  address?: string
  typeOfPayment: string
  imageVoucher?: File
  notes?: string
}
