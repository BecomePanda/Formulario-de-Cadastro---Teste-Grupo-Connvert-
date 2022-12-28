import React, { useState } from "react";
import { phoneMask } from "./Masks";
import { validatePhone } from "./Validation";

export default function FormStepTwo({ setScreen }) {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [profession, setProfession] = useState("");

  const handlePhoneChange = (value) => {
    const { isValid, errorMessage } = validatePhone(value);
    if (value) {
      if (!isValid) {
        setErrorPhone(errorMessage);
      } else {
        setErrorPhone(null);
      }
    } else {
      setErrorPhone(null);
    }

    setPhone(phoneMask(value));
  };

  const saveDataStepTwo = (event) => {
    const stepOneInformations = JSON.parse(localStorage.getItem("FormData"));
    localStorage.setItem(
      "FormData",
      JSON.stringify({ ...stepOneInformations, date, phone, profession })
    );

    setScreen(2);
  };

  const professions = [
    {
      label: "< Selecione sua profissão >",
      value: 0,
    },

    {
      label: "Caminhoneiro",
      value: 1,
    },

    {
      label: "Professor",
      value: 2,
    },

    {
      label: "Advogado",
      value: 3,
    },

    {
      label: "Auxiliar de Limpeza",
      value: 4,
    },

    {
      label: "Auxiliar de Cozinha",
      value: 5,
    },

    {
      label: "Lenhador",
      value: 6,
    },
  ];

  return (
    <div className="area">
      <form className="form" onSubmit={saveDataStepTwo}>
        <h1 className="title"> Me fale mais sobre você: </h1>

        <div className="formContainer">
          <div className="firstContent">
            <div>
              <label> Data de Nascimento: </label>
              <input
                name="Born"
                value={date}
                type="date"
                maxDate={new Date()}
                id="placeholder"
                required
                onChange={(event) => setDate(event.target.value)}
              />
            </div>

            <div>
              <label> Telefone: </label>
              <input
                name="Celphone"
                value={phone}
                id="placeholder"
                required
                placeholder="Ex: +55(XX)XXXXX-XXXX "
                onChange={(event) => handlePhoneChange(event.target.value)}
              />
              {errorPhone && <span className="errorMsg">{errorPhone}</span>}
            </div>

            <div className="labelDiv">
              <label> Profissão: </label>
              <select
                name="Professions"
                value={profession}
                id="professions"
                form="professions-form"
                onChange={(event) => setProfession(event.target.value)}
              >
                {professions.map((profession) => (
                  <option key={profession.label} value={profession.value}>
                    {profession.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="buttonsEnd">
            <button className="buttonReturn" onClick={() => setScreen(0)}>
              {" "}
              Voltar{" "}
            </button>
            <button className="buttonFinish" type="submit">
              {" "}
              Finalizar{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
