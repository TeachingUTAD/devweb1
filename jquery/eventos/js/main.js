// Cuando el documento esté listo $(document).ready(function() {});
$(function () {
    $("button").on("click", function(event){
        let op = $(this).val();
        let op1 = parseFloat($("#op1").val());
        let op2 = parseFloat($("#op2").val());
        let result;

        switch (op) {
            case "+":
                result = op1 + op2;
                break;
            case "-":
                result = op1 - op2;
                break;
            case "*":
                result = op1 * op2;
                break;
            case "/":
                result = op1 / op2;
                break;
        }

        $("#res").text(result);

    });

    //Funcionamiento del cuadrado, moverlo con las flechas
    $("body").keydown(function(event){
        let keycode = event.which;
        let topC = parseInt($("#cuadrado").css("top"),10);
        let leftC = parseInt($("#cuadrado").css("left"),10);
        
        switch(keycode) {
            case 37:
                (leftC>0 && leftC<=550) ? $("#cuadrado").css("left", "-=10")
                : $("#cuadrado").css("left", "0");
                break;
            case 38:
                (topC>0 && topC<=250) ? $("#cuadrado").css("top", "-=10")
                : $("#cuadrado").css("top", "0");
                break;
            case 39:
                (leftC>=0 && leftC<550) ? $("#cuadrado").css("left", "+=10")
                : $("#cuadrado").css("left", "550");
                break;
            case 40:
                (topC>=0 && topC<250) ? $("#cuadrado").css("top", "+=10")
                : $("#cuadrado").css("top", "250");
                break;
        }
    });

    //Funcionamiento de la tabla, colorear filas
    $("tr").mouseenter(function (event) {
        let value = $("#nombre").val();
        $(this).is(":contains(" +value+ ")")
            ? $(this).addClass("contains")
            : $(this).addClass("no-contains");
    });

    $("tr").mouseleave(function(event) {
        $(this).prop("class", "");
    });


});