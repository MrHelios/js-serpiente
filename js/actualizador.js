actualizacion = function() {
  tablero.limpiar();
  for(i=0; i<serpiente.obtenerCant();i++) {
    if(i==0) serpiente.obtenerPos(i).movimiento();
    else {
        // Copia.
    }
    serpiente.obtenerPos(i).dibujar();
  }

  setTimeout(actualizacion,50);
}
