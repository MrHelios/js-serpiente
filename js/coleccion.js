
function Coleccion(max) {
  this.longitud = new Array(max);
  this.cant = 0;
  this.color = "black";
  this.movimientoX = 0;
  this.movimientoY = 0;

  this.insertar = function(linea) {
    this.longitud[this.cant] = linea;
    this.cant++;
  }
  this.establecerMovX = function(v) {
    this.movimientoX = v;
    this.movimientoY = 0;
  }
  this.establecerMovY = function(v) {
    this.movimientoY = v;
    this.movimientoX = 0;
  }

  this.obtenerPos = function(i) { return this.longitud[i];}
  this.obtenerCant = function() { return this.cant;}
}
