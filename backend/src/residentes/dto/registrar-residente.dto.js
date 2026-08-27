class RegistrarResidenteDto {
  constructor({ nombre, apartamento, torre, documento }) {
    this.nombre = nombre;
    this.apartamento = apartamento;
    this.torre = torre;
    this.documento = documento;
  }
}

module.exports = { RegistrarResidenteDto };
