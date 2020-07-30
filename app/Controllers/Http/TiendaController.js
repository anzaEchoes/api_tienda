'use strict'

const Tienda = use('App/Models/Tienda')
const Inventario = use('App/Models/Inventario');
const Producto = use('App/Models/Producto');
const User = use('App/Models/User');

class TiendaController {

    async index({auth}) {
        const user = await auth.getUser();
        return  Tienda.all();
        //return await user.producto().fetch();
    }
    
    async show({auth,params}) {
        const {id} = params;
        const tiend = await  Tienda.find(id);
        return tiend;
    }
    
    async update ({ auth,params, request}) {
        const user = await auth.getUser();
        const { id } = params;
        const { nombre , direccion, telefono}= request.all();
        const tienda = await Tienda.find(id);
        tienda.nombre = nombre
        tienda.direccion = direccion
        tienda.telefono = telefono
        //tienda.merge(request.only(['nombre', 'direccion', 'telefono']);
        await tienda.save();
        return tienda;
    }

    async create({ auth, request }) {
        const user = await auth.getUser();
        const {nombre , direccion, telefono}= request.all();
        const tienda = new Tienda();
        tienda.fill({
            nombre , direccion, telefono
        });
        await user.tiendas().save(tienda);
        return tienda;
      }
    
      async destroy({ auth, params}) {
        const user = await auth.getUser();
        const { id } = params;
        const tienda = await Tienda.find(id);
        await tienda.delete();
        return tienda;
      }
}

module.exports = TiendaController
