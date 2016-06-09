actualizacion = function() {
  tablero.limpiar();
  for(i=0; i<serpiente.obtenerCant();i++) {
    if(i==0) {
        if(!serpiente.obtenerPos(0).giro) serpiente.obtenerPos(i).movimiento();
        
        // Verificamos la nueva posicion.
        var puntoi = serpiente.obtenerPos(0).obtenerPI();
        var pos_actual = esc.obtenerPos(puntoi.obtenerX()/5,puntoi.obtenerY()/5)
        if(pos_actual.obtenerPared()) victoria=false;
      }
    else {
        var puntoi = serpiente.obtenerPos(i-1).obtenerPF().clone();
        var puntof = serpiente.obtenerPos(i).obtenerPI().clone();

        serpiente.obtenerPos(i).establecerPI(puntoi);
        serpiente.obtenerPos(i).establecerPF(puntof);
    }
    serpiente.obtenerPos(i).dibujar();
  }
  serpiente.obtenerPos(0).giro = false;

  // Esta parte actualmente esta como test.
  // La serpiente se agrandara cuando coma una manzana.
  if(contador==20) {
    serpiente.extender(serpiente);
    contador = 0;
  }
  else contador++;

  // Mientras la serpiente este viva el juego seguira.
  if(victoria) setTimeout(actualizacion,50);
}
