

x = [2,2,'0',"4"];

doIt = (m) => {
    let y = 0;
    for (let i= 0; i <m.length; i++){
        y += m[i];
    }
    console.log(y)
    return y;
}

doIt(x);
