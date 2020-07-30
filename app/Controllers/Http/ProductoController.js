'use strict'

const Inventario = use('App/Models/Inventario');
const Tienda = use('App/Models/Tienda');
const Venta = use('App/Models/Venta');
const Producto = use('App/Models/Producto');

const AutorizacionService = use('App/Services/AutorizacionService');

class ProductoController {

    async index({auth}) {
        const user = await auth.getUser();
        const productos =  await Producto.all();
        return productos

        //return await user.producto().fetch();
    }

    
    async show({  auth,params,}) {
        const {id} = params;
        const producto = await Producto.find(id)
        return producto

        //return await user.producto().fetch();
    }

    async create({  auth,params, request}){
        const user = await auth.getUser();
        const {id} =params;
        const inventario = await Inventario.find(id);
        const { nombre, 
                codigo, 
                descripcion,
                cantidad,
                preciocompra,
                precioventa,
                pesokg,
                caducidad } = request.all();
        const producto = new Producto();
        producto.fill({
                nombre, 
                codigo, 
                descripcion,
                cantidad,
                preciocompra,
                precioventa,
                pesokg,
                caducidad
        });
        await inventario.producto().save(producto);
        return producto;
    }

    async update ({ auth, params, request}) {
        const { id} = params
        const producto = await Producto.find(id);
        const{
            nombre, 
            codigo, 
            descripcion,
            cantidad,
            preciocompra,
            precioventa,
            pesokg,
            caducidad } = request.all();
        producto.merge({
            nombre, 
            codigo, 
            descripcion,
            cantidad,
            preciocompra,
            precioventa,
            pesokg,
            caducidad

        })
        await producto.save();
        return producto;
    }

    async destroy({ auth, params}) {
        const user = await auth.getUser();
        const { id } = params;
        const producto = await Producto.find(id);
        await producto.delete();
        return producto;
      }


}

module.exports = ProductoController
