import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export class PricingService {
    constructor(private productRepository: ProductRepository) { }

    async getItemsWithProducts(
        items: { productId: string; quantity: number }[]
    ): Promise<{ product: Product; quantity: number }[]> {
        return Promise.all(
            items.map(async (items) => ({
                product: await this.productRepository.findById(items.productId),
                quantity: items.quantity
            }))
        )
    }
}
