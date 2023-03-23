import React, { useState } from "react";
import { phoneMask, cepMask } from "./Masks";
import { validatePhone, validateCEP } from "./Validation";

export default function FormStepTwo({ setScreen }) {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const [cep, setCep] = useState("");
  const [errorCEP, setErrorCEP] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

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

  const handleCepChange = (value) => {
    const { isValid, errorMessage } = validateCEP(value);
    if (value) {
      if (!isValid) {
        setErrorCEP(errorMessage);
      } else {
        setErrorCEP(null);
      }
    } else {
      setErrorCEP(null);
    }

    setCep(cepMask(value));
  };

  const checkCEP = (e) => {
    const getCep = e.target.value;
    const inputNumber = document.getElementById("number");
    fetch(`https://viacep.com.br/ws/${getCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.logradouro);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setUf(data.uf);
        inputNumber.focus();
      });
  };

  const saveDataStepTwo = (event) => {
    event.preventDefault();
    const stepOneInformations = JSON.parse(localStorage.getItem("FormData"));
    localStorage.setItem(
      "FormData",
      JSON.stringify({
        ...stepOneInformations,
        date,
        phone,
        profession,
        gender,
        cep,
        address,
        addressNumber,
        neighborhood,
        city,
        uf,
      })
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
      value: "Caminhoneiro",
    },

    {
      label: "Professor",
      value: "Professor",
    },

    {
      label: "Advogado",
      value: "Advogado",
    },

    {
      label: "Auxiliar de Limpeza",
      value: "Auxiliar de Limpeza",
    },

    {
      label: "Auxiliar de Cozinha",
      value: "Auxiliar de Cozinha",
    },

    {
      label: "Lenhador",
      value: "Lenhador",
    },
  ];

  const genders = [
    {
      label: "< Como você se identifica? >",
      value: 0,
    },

    {
      label: "Masculino",
      value: "Masculino",
    },

    {
      label: "Feminino",
      value: "Feminino",
    },

    {
      label: "Não-Binário",
      value: "Não-Binário",
    },

    {
      label: "Transgênero",
      value: "Transgênero",
    },

    {
      label: "Prefiro não dizer",
      value: "Prefiro não dizer",
    },
  ];

  return (
    <div className="area">
      <div className="title2">
        {" "}
        <div className="titleDiv">Me fale mais sobre você</div>
      </div>
      <form className="form right-panel" onSubmit={saveDataStepTwo}>
        <div className="formContainer">
          <div className="firstContent">
            <div className="labelDiv">
              <label> Data de Nascimento: </label>
              <input
                name="Born"
                value={date}
                max={new Date().toISOString().slice(0, 10)}
                type="date"
                id="placeholder"
                required
                onChange={(event) => setDate(event.target.value)}
              />
            </div>

            <div className="labelDiv">
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

            <div className="labelDiv">
              <label> Gênero: </label>
              <select
                name="Gender"
                value={gender}
                id="gender"
                form="genders-form"
                required
                onChange={(event) => setGender(event.target.value)}
              >
                {genders.map((gender) => (
                  <option key={gender.label} value={gender.value}>
                    {gender.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="addressContent">
            <div>
              <label> CEP: </label>
              <input
                name="Cep"
                value={cep}
                id="cep"
                placeholder="Digite seu CEP"
                form="cep-form"
                onChange={(event) => handleCepChange(event.target.value)}
                onBlur={checkCEP}
              />
              {errorCEP && <span className="errorMsg">{errorCEP}</span>}
            </div>

            <div>
              <label> Endereço: </label>
              <input
                name="Address"
                value={address}
                id="address"
                form="address-form"
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
          </div>

          <div className="addressContent">
            <div>
              <label> Número: </label>
              <input
                name="Number"
                value={addressNumber}
                id="number"
                form="number-form"
                onChange={(event) => setAddressNumber(event.target.value)}
              />
            </div>

            <div>
              <label> Bairro: </label>
              <input
                name="Neighbourhood"
                value={neighborhood}
                id="neighborhood"
                form="neighborhood-form"
                onChange={(event) => setNeighborhood(event.target.value)}
              />
            </div>
          </div>

          <div className="addressContent">
            <div>
              <label> Cidade: </label>
              <input
                name="City"
                value={city}
                id="city"
                form="city-form"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>

            <div>
              <label> Estado: </label>
              <input
                name="UF"
                value={uf}
                id="uf"
                form="uf-form"
                onChange={(event) => setUf(event.target.value)}
              />
            </div>
          </div>

          <div className="buttonsEndDiv">
            <button className="buttonReturn" onClick={() => setScreen(0)}>
              {" "}
              Voltar{" "}
            </button>
            <button className="buttonFinish" type="submit">
              {" "}
              Finalizar{" "}
            </button>
          </div>
          <p className="copyright">
            Designed by
            <a
              href="https://github.com/BecomePanda"
              className="a"
              title="BecomePanda"
            >
              {" "}
              BecomePanda
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
