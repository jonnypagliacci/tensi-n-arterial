
/*
    Valores de la presión arterial, declaración de condiciones.

    pS no debe ser mayor a 210
    pD no debe ser mayor a 150
    pS no debe ser menor que 60
    pD no debe ser menor a 30
    pS no debe ser igual a pD

    PAS casual <135 mmHg
    PAD casual < 85 mmHg

    ≤120/80 mmHg  =  "Presión arterial óptima Evaluación anual"

    120-134/80-84mmHg = "Tratamiento no Farmacológico Valoración en 6 meses"

    PAS casual ≥135 mmHg y <150mmHg
    PAD casual ≥ 85 mmHg y <110 mmHg

    MDPA <135/85 mmHg = "HAS de bata blanca"


*/ 

function getData(){
    
    let pS = document.getElementById("pS").value;
    let pD = document.getElementById("pD").value;


    function pError(){
        console.log(`${pS}/${pD} mmHg no es un valor correcto, vuelva a colocar los datos por favor`);
        document.getElementById("pS").value = "";
        document.getElementById("pD").value = "";
        document.getElementById("pS").focus();
    }

    function borrar(){
        document.getElementById("pS").value = "";
        document.getElementById("pD").value = "";
        document.getElementById("pS").focus();
    }





    if (pS === "") {
        console.log("Ingresa el valor de la presión sistólica al campo por favor.");
        document.getElementById("pS").focus();
        
    } else {
        if (pD === "") {
            console.log("Ingresa el valor de la presión diastólica al campo por favor.");
            document.getElementById("pD").focus();  
        } else if (pS >= 210 || pD >= 150 || pS <= 60 || pD <= 30){
            pError();
        }else if (pS < 135 && pD <85 ){
            if(pS <= 120 && pD <= 80){
                console.log(`${pS}/${pD}, Presión arterial óptima Evaluación anual.`);
                borrar();
            }else if (pS > 121 && pD > 81){
                console.log(`${pS}/${pD},Tratamiento no Farmacológico Valoración en 6 meses`);
                borrar();
            }
        }else if (pS >= 135 && pD >= 85 ){
            if(pS < 150 && pD < 110){
                console.log(`${pS}/${pD},Diagnóstico de HAS, Tratamiento Farmacológico`);
                borrar();
            }else if(pS >= 150 && pD <= 110 || pS > 180 || pD > 110){
                console.log(`${pS}/${pD},¿Riesgo Alto* o con
                daño a órgano blanco?, si = Segundo nivel ("urgencias").`);
            }
        }
    } 
}    
