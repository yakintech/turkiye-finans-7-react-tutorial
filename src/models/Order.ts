export interface Order {
    id?: number
    customerId?: string
    employeeId?: number
    orderDate?: string
    requiredDate?: string
    shippedDate?: string
    shipVia?: number
    freight?: number
    shipName?: string
    shipAddress?: ShipAddress
    details?: Detail[]
  }
  
  export interface ShipAddress {
    street?: string
    city?: string
    region?: string
    postalCode?: number
    country?: string
  }
  
  export interface Detail {
    productId?: number
    unitPrice?: number
    quantity?: number
    discount?: number
  }
  