function Tablero(canvas) {
  this.lienzo = document.getElementById(canvas).getContext("2d");
  this.long = document.getElementById(canvas).width;
  this.altura = document.getElementById(canvas).height;

  // Comandos.
  this.limpiar = function() {
    this.lienzo.beginPath();
    this.lienzo.fillStyle = "white";
    this.lienzo.fillRect(0,0,this.long,this.altura);
    this.lienzo.stroke();
  }
  this.escucharTeclado = function() {
    window.addEventListener("keydown",this.apretarTecla(),false);
  }
  this.apretarTecla = function(event) {
    // Evento para detectar tecla.
  }

  // Consultas.
  this.obtenerLong = function() { return this.long;}
  this.obtenerAltura = function() { return this.altura;}
}
