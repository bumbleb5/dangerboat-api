import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') productTitle: string,
        @Body('description') productDescription: string,
        @Body('price') productPrice: number,
    ) {
        const generatedId = this.productsService.insertProduct(
            productTitle,
            productDescription,
            productPrice,
        );
        return { id: generatedId };
    }
}