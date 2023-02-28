import { Product } from "./product_model"

export type CartItem = {
    product: Product,
    quantity: number,
    total: number
}