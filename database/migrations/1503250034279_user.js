'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('telefono').nullable()
      table.string('imagen', 60).nullable()
      table.string('rol',60).notNullable()
      table.string('direccion',100).nullable()
      table.string('cordenadas',100).nullable()
      table.string('estado',50).nullable()
      table.string('pais',80).nullable()
      table.string('red_social',140).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
