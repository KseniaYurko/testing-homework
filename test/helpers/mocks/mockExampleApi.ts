import { 
    ProductShortInfo,
    Product,
    CheckoutFormData,
    CartState,
    CheckoutResponse,
} from "../../../src/common/types";
import { commerce } from "faker";

function initProducts(): Product[] {
    const products: Product[] = []

    for(let id = 0; id < 10; id++) {
        products.push({
            id,
            name: `${commerce.productAdjective()} ${commerce.product()}`,
            description: commerce.productDescription(),
            price: Number(commerce.price()),
            color: commerce.color(),
            material: commerce.productMaterial(),
        });
    }

    return products;
}


export class ExampleApiMock {
    constructor(private readonly basename: string) {

    }

    async getProducts() {
        const products: ProductShortInfo[] = initProducts();
        return products;
    }

    async getProductById(id: number) {
        const product: Product = { 
            id,
            name: `${commerce.productAdjective()} ${commerce.product()}`,
            description: commerce.productDescription(),
            price: Number(commerce.price()),
            color: commerce.color(),
            material: commerce.productMaterial(),
        }
        return product;
    }

    async checkout(form: CheckoutFormData, cart: CartState) {
        const checkoutResponse: CheckoutResponse = { id: 1 };
        return checkoutResponse;    }
}
