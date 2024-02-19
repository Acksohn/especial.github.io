function agrandar() {
    var boton = document.getElementById("miBoton");
    var actualSize = parseFloat(window.getComputedStyle(boton, null).getPropertyValue("font-size"));
    var newSize = actualSize * 1.2; // Incrementa el tamaño en un 20%
  
    boton.style.fontSize = newSize + "px";
  }

  function agrandarBoton2() {
    var boton2 = document.getElementById("boton2");
    var actualWidth = boton2.offsetWidth;
    var actualHeight = boton2.offsetHeight;
    var nuevoWidth = actualWidth * 1.2; // Incrementa el ancho en un 20%
    var nuevoHeight = actualHeight * 1.2; // Incrementa el alto en un 20%
    
    boton2.style.width = nuevoWidth + "px";
    boton2.style.height = nuevoHeight + "px";

    if (boton1.textContent === "Como que NO 😑") {
      boton1.textContent = "Deja de presionar que NO 😭";
    } else {
      boton1.textContent = "Como que NO 😑";
    }
  }
