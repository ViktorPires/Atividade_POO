class Aviao{

    constructor(marca, origem, modelo, ano, motor, velocidadeMax, destinacao, municao){
    //propriedades
    this.marca = marca,
    this.origem = origem,
    this.modelo = modelo,
    this.ano = ano,
    this.motor = motor,
    this.velocidadeMax = velocidadeMax,
    this.destinacao = destinacao,
    this.velocidade = 0,
    this.ligado = false,
    this.municao = municao,
    this.recarregar = this.municao,
    this.aterrissar = false,
    this.altura = 0,
    this.combustivel = 205,
    this.ameaca = true,
    this.mira = false
    }

    situacao() {
        console.log("System Report:" + this.modelo + " (" + this.ligado + "): " + this.velocidade + " Km/h " + this.altura + "pés" + " Munição " + this.municao + " Combustível " + this.combustivel);
    }

    descrever() {
        console.log(JSON.stringify(this));
        
        if (this.altura == 0 && this.velocidade == 0) {
        console.log("Torre de Rádio: Sua decolagem está autorizada!!! Você está livre para decolar quando desejar!"); 
        console.log("Torre de Rádio: Para decolar, você deve estar em uma velocidade igual ou maior que 300Km/h");
        }
    }

    ligar() {
        if (this.ligado == false && this.combustivel > 0) {
        console.log("System Report: Iniciando os motores do avião...");
        this.ligado = true;
        this.combustivel-=5;
        }
    }

    desligar() {
        if (this.ligado == true && this.velocidade == 0) {
        console.log("System Report: Desligando os motores do avião...");
        this.ligado = false;
        this.aterrissar = false;
        }
    }

    decolar() {
        if (this.ligado == true && this.velocidade >= 300 && this.altura == 0 ) {
        console.log("System Report: Apertem os cintos, avião decolando!!!");
        this.altura+= 1000;
        this.combustivel-=5;
            if(this.ameaca = true){
            console.log("System Report: Atenção!!! Radares apontam possível ameaça a cerca de 200Km de Distância em Altura de 4000pés!!!");
            }
        } else if (this.ligado == true && this.velocidade < 300 && this.altura == 0){
            console.log("System Report: Atenção!!! Para decolar o avião deve estar no mínimo em 300Km/h!!!");
        }
    }

    pousar() {
        if (this.ligado == true && this.velocidade == 300 && this.altura == 1000) {
        console.log("Torre de Rádio: Pouso Autorizado!!!")
        console.log("System Report: Acionando os flaps, baixando o trem de pouso e aterrissando...");
        this.aterrissar = true;
        this.altura = 0;
        } else if(this.ligado == true && this.velocidade > 300 || this.altura > 1000){
            console.log("Torre de Rádio: Pouso negado!!! Para pousar, você deve estar em uma velocidade de 300Km/h e em uma altura de 1000pés!!!");
        } else if(this.ligado == true && this.velocidade == 200 && this.altura == 1000 && this.combustivel == 0){
            console.log("Torre de Rádio: Pouso Autorizado!!!")
            console.log("Torre de Rádio: Você deverá usar todas as suas habilidades, pois está sem combustível!!!");
            console.log("System Report: Acionando os flaps, baixando o trem de pouso e aterrissando...");
            this.aterrissar = true;
            this.altura = 0;
        }
    }

    frear() {
        if (this.ligado == true && this.velocidade <= 300 && this.aterrissar == true && this.combustivel > 0) {
        console.log("System Report: Acionando os freios e revertendo os motores...");
        this.velocidade-=100;
            if (this.ligado == true && this.velocidade == 0 && this.aterrissar == true){
                console.log("Torre de Rádio: Belo pouso! Parabéns!");
                console.log("System Report: Avião encontra-se em repouso no solo!");
                this.aterrissar == false;
            }
        } else if (this.ligado == true && this.velocidade <= 200 && this.aterrissar == true && this.combustivel == 0){
            console.log ("System Report: Acionando os freios, reversão de motores offline (Sem Combustível)");
            this.velocidade-=50;
            if (this.ligado == true && this.velocidade == 0 && this.aterrissar == true && this.combustivel == 0){
                console.log("Torre de Rádio: Foi um pouso difícil, você estava sem combustível! Belo pouso! Parabéns!");
                console.log("System Report: Avião encontra-se em repouso no solo!");
                this.aterrissar == false;
            }
        }
    }

    acelerar(){
        if(this.ligado == true && this.velocidade < this.velocidadeMax && this.combustivel >= 10) {
        console.log("System Report: Aumentando a potência dos motores em mais 100Km/h...");
        this.velocidade+=100;
        this.combustivel-=10;

            if(this.combustivel <= 100 && this.combustivel > 50){
                console.log("System Report: Alerta!!! Cerca de 50% da capacidade do combustível restante!!!");
            } else if(this.combustivel <= 50 && this.combustivel > 0){
                console.log("System Report: Alerta Máximo!!! Cerca de 25% da capacidade do combustível restante!!! Retorne imediatamente à base e reabasteça!!!");
                console.log("Torre de Rádio: Volte para a base e reabasteça! Para pousar você deve estar em uma velocidade igual a 300Km/h e em 1000pés!!!");
            }

        } else if(this.velocidade >= this.velociadeMax){
            console.log("System Report: Você está na velocidade máxima!!! Os motores não aguentam potência maior!!!")
        } else if(this.combustivel == 0){
            console.log("System Report: Alerta Máximo!!! Capacidade 0 de combustível, você está planando!!! Pouse imediatamente!!!")
            this.velocidade = 200;
        }
    }

    desacelerar() {
        if (this.ligado == true && this.velocidade > 300) {
        console.log("System Report: Desacelerando os motores em menos 100Km/h...");
        this.velocidade-=100;  
        } else if(this.ligado == true && this.velocidade == 300) {
            console.log("System Report: Você está na velocidade mínima (300Km/h), não é possível voar menos que isso com segurança!!!");
        } else if (this.ligado == true && this.velocidade == 200){
            console.log("System Report: Negado!!! Você está sem combustível e na velocidade de 200Km/h, desacelerar ocasionará Estol!!!");
        }
    }

    subir(){
        if (this.ligado == true && this.velocidade >= 300 && this.altura >= 1000) {
        console.log("System Report: Avião está subindo e ganhando 1000pés")
        this.altura+=1000;
        this.combustivel-=5;

            if(this.combustivel <= 100 && this.combustivel > 50){
                console.log("System Report: Alerta!!! Cerca de 50% da capacidade do combustível restante!!!");
            } else if(this.combustivel <= 50 && this.combustivel > 0){
                console.log("System Report: Alerta Máximo!!! Cerca de 25% da capacidade do combustível restante!!! Retorne imediatamente à base e reabasteça!!!");
                console.log("Torre de Rádio: Volte para a base e reabasteça! Para pousar você deve estar em uma velocidade igual a 300Km/h e em 1000pés!!!");
            }
            
            if(this.altura == 4000 && this.ameaca == true){
                console.log("System Report: Atenção!!! Radares apontam possível ameaça a cerca de 100Km de Distância em Altura de 6000pés!!!");
            } else if(this.altura == 6000 && this.ameaca == true){
                console.log("System Report: Atenção!!! Radares apontam possível ameaça a cerca de 50Km de Distância em Altura de 8000pés!!!");
            } else if(this.altura == 7000 && this.ameaca == true){
                console.log("System Report: Atenção!!! Radares apontam possível ameaça a cerca de 25km de Distância em Altura de 8000pés!!!");
            } else if(this.altura == 8000 && this.ameaca == true){
                console.log("System Report: Alerta Vermelho!!! Alvo identificado e considerado como Hostil!!! 0km de Distância!!! Alvejar o Inimigo!!!")
            }

        } else if(this.combustivel == 0){
            console.log("System Report: Alerta Máximo!!! Capacidade 0 de combustível, você está planando!!! Pouse imediatamente!!!")
            this.velocidade = 200;
        }
    }

    descer(){
        if (this.ligado == true && this.velocidade >= 300 && this.altura > 1000) {
        console.log("System Report: Avião está descendo e reduzindo 1000pés")
        this.altura-=1000;
        } else if (this.altura = 1000){
            console.log("System Report: Altura mínima para um voo seguro é 1000pés, não é possível descer mais que isso!!!")
            }
        }

    mirar(){
        if(this.ligado == true && this.municao > 0 && this.ameaca == true && this.altura == 8000)
        console.log("System Report: Mirando no Alvo...")
        this.mira = true
        console.log("System Report: O alvo está na mira!")
        console.log("Torre de Rádio: Você está autorizado para abater o inimigo!");
    }

    disparar() {
        
        if (this.ligado == true && this.municao > 0 && this.mira == false) {
        var prompt = require('prompt-sync');
        var prompt = prompt();
        var atirar = prompt("System Report: Não há alvo na mira, deseja disparar? S/N ");
            if (atirar == "S" || atirar == "s"){
            console.log("System Report: Disparando míssil!!!");
            this.municao-=1; 
            } else {
            console.log("System Report: Disparo abortado!!!");
            } 
        } else if (this.ligado == true && this.municao > 0 && this.ameaca == true && this.mira == true) {
        var prompt = require('prompt-sync');
        var prompt = prompt();
        var atirar = prompt("System Report: Deseja disparar? S/N ");
            if (atirar == "S" || atirar == "s"){
            console.log("System Report: Disparando míssil!!!");
            console.log("BOOOOOM!!!");
            console.log("Torre de Rádio: Alvo neutralizado!!! Belo disparo!!! Parabéns!");
            this.municao-=1;
            this.ameaca = false;
            this.mira = false;
            } else {
                console.log("System Report: Disparo abortado!!!");
                } 
        } else if (this.ligado == true && this.municao == 0) {
        console.log("System Report: Munição Esgotada!!! Reabasteça!!!");
        } 
    }

    reabastecer() {
        if (this.ligado == false && this.velocidade == 0) {
        console.log("Reabastecendo munição e combustível!!!");
        console.log("Torre de Rádio: Você está pronto para uma nova missão!")
        this.municao = this.recarregar;
        this.combustivel = 205;
        this.ameaca = true;    
        }
    }
}

module.exports=Aviao