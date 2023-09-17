import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
    @Get()
    getAll(): Promise<Product[]>{
        return this.productService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product> {
        return this.productService.getById(id)
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto){
        return this.productService.create(createProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto){
        return this.productService.update(id, updateProductDto) 
    }
}
