import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProdudctDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    title: string;

    @Prop()
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product)