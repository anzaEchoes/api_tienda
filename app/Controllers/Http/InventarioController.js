'use strict'
const Tienda = use('App/Models/Tienda')
const Inventario = use('App/Models/Inventario');
const Producto = use('App/Models/Producto');

class InventarioController {

    async index({auth}) {
        const user = await auth.getUser();
        const inventarios =  await Inventario.all();
        return inventarios
        //return await user.producto().fetch();
    }

    
    async show({  auth,params,}) {
        const {id} = params;
        const inventario =  await Inventario.find(id)
        return inventario
    }

    async update ({ auth, params, request}) {
        const user = await auth.getUser();
        const { id } = params;
        const { nombre , descripcion}= request.all();
        const inventario = await Inventario.find(id);
        inventario.nombre = nombre
        inventario.descripcion = descripcion
        await inventario.save();
        return inventario;
    }

    async create({ auth, params, request }) {
        const user = await auth.getUser();
        const { nombre , descripcion }= request.all();
        const { id } = params
        const tienda = await Tienda.find(id);
        const inventario = new Inventario();
        inventario.fill({
            nombre , descripcion
        });
        await tienda.inventario().save(inventario);
        return inventario;
      }
    
      async destroy({ auth, params}) {
        const user = await auth.getUser();
        const { id } = params;
        const inventario = await Inventario.find(id);
        await inventario.delete();
        return inventario;
      }
    
}

module.exports = InventarioController
