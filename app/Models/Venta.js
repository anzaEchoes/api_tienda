'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venta extends Model {
    vendedor(){
        return this.hasMany('App/Models/Tienda')
    }
    comprador(){
        return this.belongsTo('App/Models/User')
    }

    producto(){
        return this.hasMany('App/Models/Producto')
    }
    

}

module.exports = Venta
