'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    inventario () {
        return this.belongsTo('App/Models/Inventario')
    }
    ventas () {
        return this.hasMany('App/Models/Ventas')
    }
}

module.exports = Producto
