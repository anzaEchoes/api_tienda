'use strict'

const Database = use('Database')

const Tienda = use('App/Models/Tienda')
const Inventario = use('App/Models/Inventario');
const Producto = use('App/Models/Producto');
const User = use('App/Models/User');

const Venta = use('App/Models/Venta');

class VentaController {
  
  async index({ auth }) {
    const user = await auth.getUser();
    //const ventas = Venta.all()
    const ventas = await Database.from('ventas').where({ id_cliente: user.id })
    //const { id } = parms;
    return ventas
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { productos, descripcion, descuento, total } = request.all();
    const venta = new Venta();

    //actualiza el stock de productos que vienen en el array de pructos
    //[id,cantidad]
    await Promise.all(productos.map(async (element) => {
      const id = element[0];
      const cantidad = element[1];
      const producto = await Producto.find(id);
      producto.cantidad = producto.cantidad - cantidad
      await producto.save();
    }));

    const id_cliente = user.id
    venta.fill({
      descripcion,
      descuento,
      id_cliente,
      total
    })
/*
    const otro = new Array();
    await Promise.all(productos.map(async (element) => {
      const id = element[0];
      const producto = await Producto.find(id);
      const inventario = await Inventario.find(producto.inventario_id)
      const id_tiend = inventario.tienda_id
      const tienda = await Tienda.find(id_tiend)
      await tienda.venta().save(venta)
      otro.push(tienda)
    }));
*/

   // await user.compras().save(venta)
   await venta.save()
   return venta

  }


  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const proyecto = await Proyecto.find(id);
    AutorizacionService.verificarPermiso(proyecto, user);
    await proyecto.delete();
    return proyecto;
  }

  async update({ auth, params, request }) {
    const user = await auth.getUser();
    const { id } = params;
    const proyecto = await Proyecto.find(id);
    AutorizacionService.verificarPermiso(proyecto, user);
    proyecto.merge(request.only('nombre'));
    await proyecto.save();
    return proyecto;
  }
}

module.exports = VentaController
