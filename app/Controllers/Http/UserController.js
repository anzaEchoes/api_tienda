'use strict'

const User = use('App/Models/User');

class UserController {
  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async store({ request }) {
    const { email, 
            password, 
            nombre, 
            telefono,
            rol,
            direccion,
            cordenadas,
            estado,
            pais,
            red_social,
            } = request.all();
    const user = await User.create({
            email, 
            password, 
            nombre, 
            telefono,
            rol,
            direccion,
            cordenadas,
            estado,
            pais,
            red_social,
    });

    return this.login(...arguments);
  };
}

module.exports = UserController
