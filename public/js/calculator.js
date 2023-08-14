// Calculadora JS POO

class Calculadora{
  constructor() {
    this.display = null;
    this.buttons = null;
  }

  init() {
    this.display = document.querySelector("#display");
    this.buttons = document.querySelectorAll("button");

    this.buttons.forEach((button) => {
      button.onclick = () => this.Botones_calc(button);
    });

    document.getElementById("=").addEventListener("click", () => this.Resultados_y_op_raices());
  }

  Operaciones_basicas(ecuacion) {
    return new Function('return ' + ecuacion)();
  }

  Botones_calc(button) {
    if (button.id == "clear") {
      this.display.value = "";
    } else if (this.display.innerText != "" && button.id == "=") {
      this.Resultados_y_op_raices();
    } else if (this.display.innerText == "" && button.id == "=") {
      this.display.innerText = "Empty!";
      setTimeout(() => (this.display.innerText = ""), 2000);
    } else {
      if (button.id =="="){
        
      }else{
        this.display.value += button.id;
      }
    }
  }

  Resultados_y_op_raices() {
    let operacion = this.display.value;
    let resultado;

    if (operacion.includes("sqrt")) {
      let numero = parseFloat(operacion.replace("sqrt", ""));
      resultado = Math.sqrt(numero);
    } else if (operacion.includes("cbrt")) {
      let numero = parseFloat(operacion.replace("cbrt", ""));
      resultado = Math.cbrt(numero);
    } else {
      resultado = this.Operaciones_basicas(operacion);
    }
    
    document.getElementById('display').value = resultado;
  }
}

const Calculadora_POO = new Calculadora();
Calculadora_POO.init();


