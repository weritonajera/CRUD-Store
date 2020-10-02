import { Schema } from 'mongoose';

export const ProductSchema = new  Schema({
    NameProduct: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    ProductQuantity: {
        type: Number,
        required: true
    },
    Status: {
        type: Boolean,
        required: true
    },
    TimeStamp: {
        type: Date,
        default: Date.now
    }
})