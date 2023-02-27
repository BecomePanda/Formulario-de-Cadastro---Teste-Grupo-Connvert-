export function validateMail(value) {
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isEmail = validateEmail.test(value);

  return isEmail;
}

function removeMask(value) {
  return value ? `${value}`.replace(/[^\d]/g, "") : value;
}

export function validateCpf(value) {
  if (!value) {
    return { isValid: false, errorMessage: "Digite um CPF Válido!" };
  }

  const cpfWithoutMask = removeMask(value);

  if (cpfWithoutMask.length !== 11) {
    return { isValid: false, errorMessage: "CPF Inválido!" };
  }

  const cpfSamesNumbers = checkCpfSameNumbers(cpfWithoutMask);
  if (cpfSamesNumbers) {
    return { isValid: false, errorMessage: "CPF Inválido!" };
  }

  const firstIdNumberTest = cpfWithoutMask.substring(0, 9);
  const secondIdNumberTest = cpfWithoutMask.substring(0, 10);

  const firstVerifyingDigit = calculateCpf(firstIdNumberTest);
  const secondVerifyingDigit = calculateCpf(secondIdNumberTest);

  const firstDigitValid =
    (firstVerifyingDigit < 10 &&
      firstVerifyingDigit === Number(cpfWithoutMask.charAt(9))) ||
    (firstVerifyingDigit >= 10 && Number(cpfWithoutMask.charAt(9)) === 0);

  const secondDigitValid =
    (secondVerifyingDigit < 10 &&
      secondVerifyingDigit === Number(cpfWithoutMask.charAt(10))) ||
    (secondVerifyingDigit >= 10 && Number(cpfWithoutMask.charAt(10)) === 0);

  const validCpf = firstDigitValid && secondDigitValid;

  return { isValid: validCpf, errorMessage: validCpf ? "" : "CPF Inválido!" };
}

// Cálculo de digitos verificadores ->

function calculateCpf(testNumber) {
  const { length } = testNumber;
  let i = 0;
  let multiplicator = length + 1;
  const results = [];
  for (; i < length; i++) {
    const digit = Number(testNumber.charAt(i));
    if (multiplicator >= 2) {
      const result = digit * multiplicator;
      results.push(result);
      multiplicator--;
    }
  }

  const total = results.reduce(
    (prevValue, currentValue) => prevValue + currentValue
  );

  const model = total % 11;

  const verifyingDigit = 11 - model;
  return verifyingDigit;
}

// Checagem de números repetidos ->

function checkCpfSameNumbers(cpf) {
  let equalNumbersCount = 0;
  const singleNumbers = [];

  let i = 0;
  for (; i < 11; i++) {
    const char = cpf.charAt(i);
    if (singleNumbers.indexOf(char) > -1) {
      equalNumbersCount++;
    } else {
      singleNumbers.push(char);
    }
  }
  if (equalNumbersCount >= 11) {
    return true;
  }
  return false;
}

export function validatePhone(value) {
  if (!value) {
    return { isValid: false, errorMessage: "Digite seu telefone!" };
  }
  const phoneWithoutMask = removeMask(value);
  const validPhone = phoneWithoutMask && phoneWithoutMask.length >= 11;

  return {
    isValid: validPhone,
    errorMessage: validPhone ? "" : "Telefone inválido!",
  };
}

