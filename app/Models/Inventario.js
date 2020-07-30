'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inventario extends Model {
    
    tienda () {
        return this.belongsTo('App/Models/Tienda')
   }

    producto () {
        return this.hasMany('App/Models/Producto')
    }

    
}


module.exports = Inventario
