function calcularPorcentaje() {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  if (isNaN(cantidad) || isNaN(porcentaje)) {
    document.getElementById('resultado').textContent = 'Por favor, ingresa valores válidos.';
    return;
  }
  const resultado = (cantidad * porcentaje) / 100;
  document.getElementById('resultado').textContent = `El ${porcentaje}% de ${cantidad} es ${resultado}`;
}