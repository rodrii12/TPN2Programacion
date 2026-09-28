export function seleccionDeConversion(opcion){
  let tasaConversion;
  switch(opcion){
    case 1:
      tasaConversion = 1530.79;
      break;
    case 2:
      tasaConversion = 1742.07;
      break;
    case 3:
      tasaConversion = 2017.19;
      break;
    case 4:
      tasaConversion = 11.45;
      break;
    case 5:
      tasaConversion = 290.15;
      break;
    case 6:
      tasaConversion = 213.31;
      break;
    default:
      tasaConversion = 0;
      break;
  }
  return tasaConversion;
}

export function convertirMoneda(monto, tasa){
  return monto * tasa;
}
