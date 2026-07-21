interface DiscountStrategy {
    calculate(): number
}

class PremiumDiscount implements DiscountStrategy {
    calculate(): number {
        return 20
    }
}

class RegularDiscount implements DiscountStrategy {
    calculate(): number {
        return 10
    }
}

class NoDiscount implements DiscountStrategy {
    calculate(): number {
        return 0
    }
}

class DiscountCalculator {
    calculateDiscount(strategy: DiscountStrategy): number {
        return strategy.calculate()
    }
}

const discountCalculator = new DiscountCalculator()
console.log(discountCalculator.calculateDiscount(new PremiumDiscount()));
