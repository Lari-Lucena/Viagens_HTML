var pais;
var nome;
var diaria;

nome = window.prompt('Entre com o país que deseja obter informação de diária.');
diaria = window.prompt('Quantas diárias deseja?');

if(pais == 'ilhas maldivas'){
   return diaria * 15.000;
}
if(pais == 'nova york'){
    return diaria * 5.000;
 }
if(pais == 'amsterdam'){
    return diaria * 1.000;
 }
if(pais == 'paris'){
    return diaria * 7.000;
 }
 if(pais == 'sicilia'){
    return diaria * 2.000;
 }
