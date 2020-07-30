'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tienda extends Model {
    usuario () {
        return this.belongsTo('App/Models/User')
    }
    inventario(){
        return this.hasMany('App/Models/Inventario')
    }

    venta(){
        return this.hasMany('App/Models/Venta')
    }

}

module.exports = Tienda
