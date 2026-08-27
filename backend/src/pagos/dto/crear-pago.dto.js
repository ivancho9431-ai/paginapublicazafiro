class CrearPagoDto {
  constructor({ residenteId, monto, concepto, referencia }) {
    this.residenteId = residenteId;
    this.monto = monto;
    this.concepto = concepto;
    this.referencia = referencia;
  }
}

module.exports = { CrearPagoDto };
