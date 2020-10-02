import { Injectable, Res } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './InterfaceProductos/productos.interface';
import { ProductoDto } from './dtoProductos/productos.dto';

@Injectable()
export class ProductosService {

    constructor(@InjectModel("Product") private productM : Model<Product>){}

    //getProductsOut(){
        //const products = this.productM.find({$where: "ProductQuantity == 0"})
        //return products
    //}

    getProducts(){
        const products = this.productM.find();
        return products
    }

    getAgotados(){
        const products = this.productM.find().where('/agotados', 0)
        return products
    }

    createProduct(createProduct: ProductoDto){
        const product = this.productM.create(createProduct)
        return product
    }

    deleteProduct(id: string){
        const productDeleted = this.productM.findByIdAndDelete(id)
        return productDeleted
    }

    updateProduct(id: string, product: ProductoDto){
        const productUpdated = this.productM.findByIdAndUpdate(id,product)
        return productUpdated
    }
}
