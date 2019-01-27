import {Product} from './product.model'

export class CartItem{
    constructor(public product: Product,
        public quantity: number = 1) {}

    value(): number {
        return this.product.preco * this.quantity
    }     
}