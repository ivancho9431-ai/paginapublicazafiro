class CrearPqrDto {
  constructor({ tipo, asunto, descripcion, residenteId }) {
    this.tipo = tipo;
    this.asunto = asunto;
    this.descripcion = descripcion;
    this.residenteId = residenteId;
  }
}

module.exports = { CrearPqrDto };
