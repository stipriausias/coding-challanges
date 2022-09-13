function last(x){
    return x.split(' ').sort(function (a, b) {
   if (a.slice(-1) < b.slice(-1)) {
     return -1;
   }
   if (a.slice(-1) > b.slice(-1)) {
     return 1;
   }
   return 0;
 });
 }