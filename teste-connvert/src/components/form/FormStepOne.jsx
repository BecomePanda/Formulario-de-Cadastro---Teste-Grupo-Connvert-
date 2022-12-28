import React, { useState } from "react";
import { cpfMask, moneyMask } from "./Masks";
import { validateCpf, validateMail } from "./Validation";

export default function FormStepOne({ setScreen }) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [cpf, setCpf] = useState("");
  const [renda, setRenda] = useState("");
  const [errorMail, setErrorMail] = useState(null);
  const [errorCpf, setErrorCpf] = useState(null);

  const handleEmailChange = (value) => {
    const isEmail = validateMail(value);
    if (value) {
      if (!isEmail) {
        setErrorMail("Digite o e-mail corretamente!");
      } else {
        setErrorMail(null);
      }
    } else {
      setErrorMail(null);
    }

    setMail(value);
  };

  const handleCpfChange = (value) => {
    const { isValid, errorMessage } = validateCpf(value);
    if (value) {
      if (!isValid) {
        setErrorCpf(errorMessage);
      } else {
        setErrorCpf(null);
      }
    } else {
      setErrorCpf(null);
    }

    setCpf(cpfMask(value));
  };

  const handleMoneyChange = (value) => {
    setRenda(moneyMask(value));
  };

  const saveData = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "FormData",
      JSON.stringify({ name, mail, cpf, renda })
    );

    setScreen(1);
  };

  return (
    <div className="area">
      <form className="form" onSubmit={saveData}>
        <h1 className="title"> Área do Usuário </h1>

        <div className="formContainer">
          <div className="firstContent">
            <div>
              <label> Nome Completo: </label>
              <input
                name="Name"
                value={name}
                id="placeholder"
                required
                placeholder="Insira seu nome aqui"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div>
              <label> E-Mail: </label>
              <input
                name="Mail"
                value={mail}
                id="placeholder"
                required
                placeholder="Insira um email válido"
                onChange={(event) => handleEmailChange(event.target.value)}
              />
              {errorMail && <span className="errorMsg">{errorMail}</span>}
            </div>
          </div>

          <div className="secondContent">
            <div>
              <label> CPF: </label>
              <input
                name="Cpf"
                value={cpf}
                id="placeholder"
                required
                placeholder="Insira seu CPF"
                onChange={(event) => handleCpfChange(event.target.value)}
              />
              {errorCpf && <span className="errorMsg">{errorCpf}</span>}
            </div>

            <div>
              <label> Renda Principal: </label>
              <input
                name="Renda"
                value={renda}
                id="placeholder"
                required
                placeholder="Valor de sua renda principal"
                onChange={(event) => handleMoneyChange(event.target.value)}
              />
            </div>
          </div>

          <button className="button" type="submit">
            {" "}
            Próximo{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
