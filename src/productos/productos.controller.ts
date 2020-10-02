import { Controller, Res, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { response } from 'express';
import { ProductoDto } from './dtoProductos/productos.dto';
import { ProductosService } from './productos.service';

@Controller('Store')
export class ProductosController {

    constructor( private _product: ProductosService ){}

    @Get()
    async getProducts(@Res() response){
        const res = await this._product.getProducts()
        response.status(200).json({
            mensaje: "Peticion get hecha. Productos obtenidos.",
            data: res
        })
    }

    @Get('/agotados')
    getProdsAgotados(@Res() response){

    }

    @Post('/crear')
    async create(@Res() response, @Body() dataProduct: ProductoDto){
        const res = await this._product.createProduct(dataProduct)
        response.status(200).json({
            mensaje: "Peticion post hecha. Producto creado.",
            data: res
        })
    }

    @Delete('/borrar')
    async delete(@Res() response, @Body() id : string){
        const res =  await this._product.deleteProduct(id)
        response.status(200).json({
            mensaje: "Peticion delete hecha. Producto borrado.",
            data: res
        })
    }

    @Put('/editar')
    async edit(@Res() response, @Body() dataProduct: ProductoDto, @Query('_id') IdProduct) {
        const res = await this._product.updateProduct(IdProduct, dataProduct)
        response.status(200).json({
            mensaje: "Peticion put hecha. Producto editado.",
            data: res
        })
    }
}
