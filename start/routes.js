'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(() => {
  Route.post('usuarios/registro', 'UserController.store');
  Route.post('usuarios/login', 'UserController.login');
  // Rutas de inventario
  Route.get('inventarios', 'InventarioController.index').middleware('auth');
  Route.get('inventario/:id', 'InventarioController.show').middleware('auth');
  Route.post('inventario/:id', 'InventarioController.create').middleware('auth');
  Route.patch('inventario/:id', 'InventarioController.update').middleware('auth');
  Route.delete('inventario/:id', 'InventarioController.destroy').middleware('auth');
  // Rutas de productos
  Route.get('productos', 'ProductoController.index').middleware('auth');
  Route.get('producto/:id', 'ProductoController.show').middleware('auth');
  Route.post('producto/:id', 'ProductoController.create').middleware('auth');
  Route.patch('producto/:id', 'ProductoController.update').middleware('auth');
  Route.delete('producto/:id', 'ProductoController.destroy').middleware('auth');
  // Rutas de tiendas
  Route.get('tiendas', 'TiendaController.index').middleware('auth');
  Route.get('tienda/:id', 'TiendaController.show').middleware('auth');;
  Route.post('tienda', 'TiendaController.create').middleware('auth');
  Route.patch('tienda/:id', 'TiendaController.update').middleware('auth');
  Route.delete('tienda/:id', 'TiendaController.destroy').middleware('auth');

  // Rutas de tiendas
  Route.get('ventas', 'VentaController.index').middleware('auth');
  Route.get('venta/:id', 'VentaaController.show').middleware('auth');;
  Route.post('venta', 'VentaController.create').middleware('auth');
  Route.patch('venta/:id', 'VentaController.update').middleware('auth');
  Route.delete('venta/:id', 'VentaController.destroy').middleware('auth');
}).prefix('api/');