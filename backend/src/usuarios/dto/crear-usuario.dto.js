class CrearUsuarioDto {
  constructor({ nombre, email, rol }) {
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
  }
}

module.exports = { CrearUsuarioDto };
