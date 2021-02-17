function getNum(num) {
  //Repetimos el elemento "document.getElementById("screen").value" al juntarlo con "num" para decirle que almacene los números en "screen" hasta que ejecute la siguiente función
  document.getElementById("screen").value += num;
}

//Repetimos los operadores en pantalla igual que con los números
function getOp(op) {
  document.getElementById("screen").value += op;
}

//Borrar la pantalla
function allClear() {
  document.getElementById("screen").value = "0";
}

function getResult() {
  document.getElementById("screen").value = eval(
    document.getElementById("screen").value
  );
}
