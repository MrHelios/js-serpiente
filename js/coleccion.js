
function Coleccion(max) {
  this.longitud = new Array(max);
  this.cant = 0;
  this.color = "black";

  this.insertar = function(linea) {
    this.longitud[this.cant] = linea;
    this.cant++;
  }

  this.obtenerPos = function(i) { return this.longitud[i];}
  this.obtenerCant = function() { return this.cant;}
}
