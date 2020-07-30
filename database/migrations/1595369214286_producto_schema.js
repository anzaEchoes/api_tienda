'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string("nombre", 60).notNullable()
      table.integer('codigo').nullable()
      table.string("descripcion", 100).nullable()
      table.integer('cantidad').nullable()
      table.float('preciocompra').nullable()
      table.float('precioventa').nullable()
      table.float('pesokg').nullable()
      table.date('caducidad').nullable()
      table.integer('inventario_id').unsigned().references('id').inTable('inventario')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
