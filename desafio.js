do{
    var gas = (parseFloat(prompt('Insira o valor da Gasolina:')));
    var eta = (parseFloat(prompt('Insira o valor do Etanol ')));
    var div = (eta/gas);
    var div2 = div.toFixed(2)
    console.log(div2)
    console.log('-------------------------');
    if ( div2 == 0.70){
      console.log('Abasteça com qualquer um dos combustiveis')
     }
      if ( div2 > 0.70){
        console.log('Abasteça com Gasolina')
      }
         if( div2 < 0.70){
           console.log('Abasteça com Etanol')
         }
          console.log('-------------------------');
          console.log('Responda 1 para SIM');
          console.log('Responda 2 para NÂO');
          var refaz = (parseInt(prompt('Deseja refazer a consulta?')));
          console.log('--------------------------');
   } while( refaz != 2);
        if ( refaz = 2){
          console.log('Volte Sempre!');
         }