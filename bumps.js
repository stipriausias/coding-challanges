function bump(x){
    return x.split('').filter((element) => element === 'n' ).length <= 15  ? "Woohoo!" : "Car Dead";
   }