export function clearStringOnlyNumbers(value) {
  return value ? `${value}`.replace(/\D/g, "") : value;
}

export function cpfMask(value) {
  if (!value) {
    return "";
  }
  let newValue = clearStringOnlyNumbers(value);
  if (newValue.length > 11) {
    newValue = newValue.substring(0, 11);
  }
  newValue = newValue.replace(/(\d{3})(\d{3})(\d)/, "$1.$2.$3");
  newValue = newValue.replace(/(\d)(\d{2})$/, "$1-$2");

  return newValue;
}

export function cepMask(value) {
  if (!value) {
    return "";
  }
  let newValue = clearStringOnlyNumbers(value);
  if (newValue.length > 8) {
    newValue = newValue.substring(0, 8);
  }
  newValue = newValue.replace(/(\d{5})(\d)/, "$1-$2");
  newValue = newValue.replace(/(-\d{3})\d+?$/, "$1");

  return newValue;
}

export function moneyMask(value) {
  if (!value) {
    return "";
  }

  let newValue = clearStringOnlyNumbers(value);

  const counter = (value.length - 5) / 3;

  newValue = newValue.replace(/^([.\d]+)(\d{2})$/, "R$ $1,$2");
  for (let i = 0; i < counter; i += 1) {
    newValue = newValue.replace(/(\d+)(\d{3})([.,\d]+)$/, "$1.$2$3");
  }

  return newValue;
}

export function phoneMask(value) {
  if (!value) {
    return "";
  }
  let newValue = clearStringOnlyNumbers(value);
  if (newValue.length >= 11) {
    newValue = newValue.substring(0, 11);
  }

  newValue = newValue.replace(/(\d{2})(\d{1})(\d)/, "($1) $2 $3");

  newValue = newValue.replace(/(\d{4})(\d{4})$/, "$1-$2");

  return newValue;
}
