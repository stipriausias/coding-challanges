function divCon(x){
    let num = 0;
     let str = 0;
     for ( let i = 0; i < x.length; i++){
     if (typeof x[i] === 'number'){
       num += x[i]
     } else {
       str += Number(x[i])
     }
    }
     return num - str
   }