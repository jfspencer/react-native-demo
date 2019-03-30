export interface NewProduct {
    name: string
    description: string,
    style: string
    brand: string
    shipping_price_cents: number
}

export interface Product {
    id: number
    product_name: string
    description: string
    style: string
    brand: string
    created_at: string
    updated_at: string
    url: string
    product_type: string
    shipping_price: number
    note: string
    admin_id: number
}