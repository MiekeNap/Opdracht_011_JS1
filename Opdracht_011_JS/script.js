        console.log("Hello Winc Academy");
        let name = "Mieke";
        console.log("Mieke");
        console.log(typeof("name"));
        // kan niet "if" gebruiken als variabele omdat het een gereserveerd keyword is
        4+4
        "4"+"4"
        console.log(4+4); //optellen van numbers geeft een echte berekening
        console.log("4"+"4"); //optellen van strings geeft als resultaat de twee strings aan elkaar geplakt (een string is een tekst)
        function addition(x, y = 5) {
            return x + y;
        } 
        console.log(addition(2));

        function substraction(a, b = 1) {
            return a - b;
          }
        console.log(substraction(5));  
        
          function multiplication(a, b = 1) {
            return a * b;
          }
        console.log(multiplication(5));
        
        function division(a, b = 1) {
            return a / b;
          }
        console.log(division(5));
        
        function modulus(a, b = 2) {
            return a % b;
          }
        console.log(modulus(5));  

        let age=38;
        console.log(typeof(age));
        console.log(typeof(38));

        
        console.log("38"); 
        console.log(typeof("38")); 
        
        let leeftijd = "38";
        console.log(typeof("leeftijd"));