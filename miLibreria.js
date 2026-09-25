export function calcularPorcentaje(producto) {
    if (producto.precio < 60) {
        producto.porcentajeAplicado = 20;
        producto.aumento = (producto.precio * 20) / 100;
    } else if (producto.precio < 100) {
        producto.porcentajeAplicado = 15;
        producto.aumento = (producto.precio * 15) / 100;
    } else {
        producto.porcentajeAplicado = 10;
        producto.aumento = (producto.precio * 10) / 100;
    }
    
    producto.precioFinal = producto.precio + producto.aumento;
}