class Carro {
  
    constructor(marca, modelo, cor, ano){
      //propriedades
      this.marca = marca,
      this.modelo = modelo,
      this.cor = cor,
      this.ano = ano,
      this.velocidade = 0,
      this.ligado = false
    }
  
    situacao() {
      console.log(this.modelo + " (" + this.ligado + "): " + this.velocidade + " km/h");
    }
  
    descrever() {
      console.log(JSON.stringify(this)); 
    }
  
    ligar() {
      if(this.ligado === false) {
        console.log("Dando partida no carro...");
        this.ligado = true;
      }
    }
  
    desligar() {
      if (this.ligado === true && this.velocidade === 0) {
        console.log("Desligando o carro...");
        this.ligado = false;
      }
    }
  
    acelerar(){
      if(this.ligado === true) {
        console.log("Acelera Airton...");
        this.velocidade+=10;
      }
    }
  
    frear() {
      if (this.ligado === true && this.velocidade > 0) {
        console.log("Chiii deu ruim...");
        this.velocidade-=5;  
      }
    }
}
  
  module.exports=Carro