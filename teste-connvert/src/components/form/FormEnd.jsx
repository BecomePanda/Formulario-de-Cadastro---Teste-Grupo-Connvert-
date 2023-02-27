import React from "react";
import name from "./FormStepOne";
import mail from "./FormStepOne";
import cpf from "./FormStepOne";
import renda from "./FormStepOne";
import date from "./FormStepTwo";
import phone from "./FormStepTwo";
import profession from "./FormStepTwo";
import gender from "./FormStepTwo";
import cep from "./FormStepTwo";
import address from "./FormStepTwo";
import neighborhood from "./FormStepTwo";
import city from "./FormStepTwo";
import uf from "./FormStepTwo";

export default function FormEnd({ setScreen }) {
  const showResults = JSON.parse(
    localStorage.getItem(
      "FormData",
      name,
      mail,
      cpf,
      renda,
      date,
      phone,
      profession,
      gender,
      cep,
      address,
      neighborhood,
      city,
      uf,
    )
  );
  const formattedResults = [
    {
      label: "Nome Completo",
      value: showResults.name,
    },
    {
      label: "E-mail",
      value: showResults.mail,
    },
    {
      label: "CPF",
      value: showResults.cpf,
    },
    {
      label: "Renda",
      value: showResults.renda,
    },
    {
      label: "Data de Nascimento",
      value: showResults.date,
    },
    {
      label: "Telefone",
      value: showResults.phone,
    },
    {
      label: "Profissão",
      value: showResults.profession,
    },
    {
      label: "Gênero",
      value: showResults.gender,
    },
    {
      label: "CEP",
      value: showResults.cep,
    },
    {
      label: "Endereço",
      value: showResults.address,
    },
    {
      label: "Bairro",
      value: showResults.neighborhood,
    },
    {
      label: "Cidade",
      value: showResults.city,
    },
    {
      label: "Estado",
      value: showResults.uf,
    },
  ];

  return (
    <div className="formEnd">
      <h1 className="title"> Cadastro efetuado com sucesso!</h1>
      <div className="information">
        {formattedResults.map((result) => (
          <div key={result.label}>
            <span>
              {result.label}: {result.value}{" "}
            </span>
          </div>
        ))}
      </div>

      <div>
        <button className="buttonReset" onClick={() => setScreen(0)}>
          {" "}
          Voltar ao Início{" "}
        </button>
      </div>
    </div>
  );
}
