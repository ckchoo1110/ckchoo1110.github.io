$(document).ready(function(){
    var testNumLength = function(number) {
        if (number.length > 8 ) {
           totaldiv.text(number.substr(0,10));  
        }  
   };   
    var number = "";
    var newnumber = "";
    var operator = "";
    var tempNumber = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    var chgrec = function(){
        $('#rec').append(parseInt(newnumber,10) + operator + parseInt(tempNumber,10) +"="+parseFloat(number,10)+"<br>").toString(10);
    };
    $("#numbers a").not("#clear,#clearall").click(function(){
        number += $(this).text();
        var temp = number;
        totaldiv.text(number);
        testNumLength(number);
        
        
    });
    $("#operators a,#side a").not("#equals,#decimal").click(function(){
        operator = $(this).text();
         if (newnumber ===""){
        newnumber = number;
        } else {var newnewnumber = newnumber;
                newnumber = number;
         if (operator === "+"){
            newnumber = (parseInt(newnewnumber, 10) + parseInt(newnumber,10)).toString(10);
        } else if (operator === "-"){
            newnumber = (parseInt(newnumber, 10) - parseInt(newnewnumber,10)).toString(10);
        } else if (operator === "÷"){
            newnumber = (parseInt(newnumber, 10) / parseInt(newnewnumber,10)).toString(10);
        } else if (operator === "×"){
            newnumber = (parseInt(newnumber, 10) * parseInt(newnewnumber,10)).toString(10);
        }
        } 
        number = "";
        
        
    });
    $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
            $('#rec').html("");
        }
        
    });
  
    $("#equals").click(function(){
         tempNumber = number
        if (operator === "+"){
            number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
        } else if (operator === "-"){
            number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
        } else if (operator === "÷"){
            number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
        } else if (operator === "×"){
            number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
        } 
        totaldiv.text(number);
        testNumLength(number);
        chgrec();
        number = "";
        newnumber = "";

    });
    
});