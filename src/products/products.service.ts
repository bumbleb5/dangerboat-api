import { Injectable } from '@nestjs/common';
import { ProductModel } from './product.model';

@Injectable()
export class ProductsService {
    products: ProductModel[] = [];

    insertProduct(title: string, description: string, price: number): string {
        const productId = new Date().toString();
        const newProduct = new ProductModel(
            productId,
            title,
            description,
            price,
        );
        this.products.push(newProduct);
        return productId;
    }
}