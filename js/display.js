class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      dividir: "÷",
      multiplicar: "x",
      elevar: "^",
      restar: "-",
    };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
    this.displayValorAnterior.style.color = "#000";
  }

  computar(tipo) {
    if(tipo === "porcentaje" || tipo === "raiz"){
      const valorActual = parseFloat(this.valorActual);
      if (isNaN(valorActual)) return;
      this.valorActual = this.calculador[tipo](valorActual);
      this.displayValorActual.textContent = this.valorActual;
    }else{
      this.tipoOperacion !== "igual" && this.calcular();
      this.tipoOperacion = tipo;
      this.valorAnterior = this.valorActual === 0 ? 0 : this.valorActual || this.valorAnterior;
      this.valorActual = "";
      this.imprimirValores();
      this.tipoOperacion === "igual"
        ? (this.displayValorAnterior.style.color = "#008EB4")
        : (this.displayValorAnterior.style.color = "#000");
    }
  }

  agregarNumero(numero) {
    if (
      (numero === "." && this.valorActual.includes(".")) ||
      (this.valorActual === "" && (numero === "00" || numero === "0"))
    )
      return;
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }

  pi() {
    this.valorActual = this.calculador.pi();
    this.displayValorActual.textContent = this.valorActual;
  }

  modificarSigno() {
    if (this.valorActual === '' || this.valorActual === '.') return;
    let nx = parseFloat(this.valorActual); 
    this.valorActual = nx*-1; //cambiar de signo
    this.displayValorActual.textContent = this.valorActual;
  }
}
