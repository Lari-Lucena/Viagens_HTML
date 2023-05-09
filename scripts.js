function calcular(){
   var diaria;
   var pais;
   var result;
   

   pais = window.prompt(`
   1 - Ilhas Maldivas
   2 - Nova York
   3 - Amsterdam
   4 - Paris
   5 - Sicilia

   Em Qual país deseja se hospedar?`);

   diaria = window.prompt(`Quantas noites deseja?`);

 if(pais == 1){
       result = diaria * 15000;
   }
   
   if(pais == 2){
       result = diaria * 5000;
   }
   
   if(pais == 3){
       result = diaria * 1000;
   }
   
   if(pais == 4){
       result = diaria * 7000;
   }
   
   if(pais == 5){
       result = diaria * 2000;
   } 
   
   result = window.alert(`Valor total das diárias: R$${result}`); 
}
