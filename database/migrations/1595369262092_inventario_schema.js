'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.string('descripcion', 80).nullable()
      table.integer('tienda_id').unsigned().references('id').inTable('tienda')
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventarioSchema
