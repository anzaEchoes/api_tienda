'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
  up () {
    this.create('ventas', (table) => {
      table.increments()
      table.integer('producto_id').unsigned().references('id').inTable('producto')
      table.string('descripcion').nullable()
      table.float('descuento').notNullable()
      table.float('total').notNullable()
      table.integer('id_cliente',100).notNullable()
      table.integer('id_vendedor',100).notNullable()
       table.timestamps()

    })
  }

  down () {
    this.drop('ventas')
  }
}

module.exports = VentaSchema

