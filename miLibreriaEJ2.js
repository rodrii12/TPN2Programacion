export function seleccionDeConversion(opcion , tasas){
  let tasaConversion;
  switch(opcion){
    case 1:
      tasaConversion = tasas.dolares;
      break;
    case 2:
      tasaConversion = tasas.euros;
      break;
    case 3:
      tasaConversion = tasas.libras;
      break;
    case 4:
      tasaConversion = tasas.yen;
      break;
    case 5:
      tasaConversion = tasas.real;
      break;
    case 6:
      tasaConversion = tasas.yuan;
      break;
    default:
      tasaConversion = 0;
      break;
  }
  return tasaConversion;
}

export function agregarTasas(tasas){
  tasas.dolares = parseFloat(prompt("Ingrese la tasa para dólares:", tasas.dolares));
  tasas.euros = parseFloat(prompt("Ingrese la tasa para euros:", tasas.euros));
  tasas.libras = parseFloat(prompt("Ingrese la tasa para libras:", tasas.libras));
  tasas.yen = parseFloat(prompt("Ingrese la tasa para yen:", tasas.yen));
  tasas.real = parseFloat(prompt("Ingrese la tasa para real:", tasas.real));
  tasas.yuan = parseFloat(prompt("Ingrese la tasa para yuan:", tasas.yuan));
}


export function convertirMoneda(monto, tasa){
  return monto * tasa;
}
