precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

document.querySelector("#suma").addEventListener("click", () => {
  let cantidad = document.querySelector(".cantidad");
  let aumentar = Number(cantidad.innerHTML);
  aumentar = aumentar + 1;
  cantidad.innerHTML = aumentar;
  let total = document.querySelector(".valor-total");
  total.innerHTML = aumentar * precio;
  if (aumentar > 0) {
    document.querySelector("#resta").disabled = false;
  }
});

document.querySelector("#resta").addEventListener("click", () => {
  let cantidad = document.querySelector(".cantidad");
  let disminuir = Number(cantidad.innerHTML);
  disminuir = disminuir - 1;
  cantidad.innerHTML = disminuir;
  let total = document.querySelector(".valor-total");
  total.innerHTML = disminuir * precio;
  if (disminuir === 0) {
    document.querySelector("#resta").disabled = true;
  }
});
