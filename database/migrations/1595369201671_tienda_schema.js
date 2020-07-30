'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiendaSchema extends Schema {
  up () {
    this.create('tiendas', (table) => {
      table.increments()
      table.string('nombre', 254).notNullable()
      table.string('direccion', 60).nullable()
      table.integer('telefono').nullable()
      table.string('imagen').nullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('tiendas')
  }
}

module.exports = TiendaSchema
