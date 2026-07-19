export interface outStockItem {
    productId: string;
    requestedQuantity: number;
    avaliableQuantity: number;
}

export class StockValidator {
    constructor(private stockService: StockService) { }

    async validateStock(
        items: { productId: string; quantity: number }[]
    ): Promise<void> {
        const outOfStockItems = await this.stockService.checkStock(items);

        if (outOfStockItems.length > 0) {
            throw new Error(
                `Produto fora de estoque ${outOfStockItems.join(", ")}`
            )
        }

    }
}

export class StockService {
    private stock: { [productId: string]: number } = {
        "1": 10,
        "2": 5,
        "3": 0,
    }

    async checkStock(
        items: { productId: string; quantity: number }[]
    ): Promise<outStockItem[]> {
        const outOfStockItems: outStockItem[] = []
        for (const item of items) {
            const avaliableQuantity = this.stock[item.productId] || 0;
            if (item.quantity > avaliableQuantity) {
                outOfStockItems.push({
                    productId: item.productId,
                    requestedQuantity: item.quantity,
                    avaliableQuantity,
                })
            }
        }
        return outOfStockItems
    }
}
