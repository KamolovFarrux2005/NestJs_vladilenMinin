import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProdudctDocument } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProdudctDocument>) {}

    async getAll(): Promise<Product[]> {
        return await this.productModel.find();
    }

   async getById(id: string): Promise<Product> { 
        return await this.productModel.findById({_id: id});
    }

   async create(productDto: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(productDto);
        return newProduct.save()
    }

    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id);
    }

    async update(id: string, updateProductDto: UpdateProductDto) {
        return this.productModel.findByIdAndUpdate(id, updateProductDto, {new: true})
    }
}
