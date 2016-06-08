actualizacion = function() {
  tablero.limpiar();
  for(i=0; i<serpiente.obtenerCant();i++) {
    if(i==0) {
        if(!serpiente.obtenerPos(0).giro) serpiente.obtenerPos(i).movimiento();
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
    i = serpiente.obtenerCant()-1;
    var linea_nueva = new Linea(cvs,serpiente.obtenerPos(i).obtenerPF().clone(),serpiente.obtenerPos(i).obtenerPF().clone());

    var dir = serpiente.obtenerPos(i).obtenerPI().obtenerY() - serpiente.obtenerPos(i).obtenerPF().obtenerY();
    if(dir!=0) linea_nueva.obtenerPF().establecerY(linea_nueva.obtenerPF().obtenerY() + dir);
    else {
      dir = linea_nueva.obtenerPI().obtenerX() - linea_nueva.obtenerPF().obtenerX();
      linea_nueva.obtenerPF().establecerX(linea_nueva.obtenerPF().obtenerX() + dir);
    }

    serpiente.insertar(linea_nueva);
    contador = 0;
  }
  else contador++;

  setTimeout(actualizacion,50);
}
