export class ShippingService {
    calculateShipping(subtotal: number): number {
        return subtotal < 300 ? 20 : 0; // Frete grátis para pedidos acima de 300
    }
}
