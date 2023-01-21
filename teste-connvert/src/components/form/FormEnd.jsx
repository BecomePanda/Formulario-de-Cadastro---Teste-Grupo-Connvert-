import React from "react";
import name from "./FormStepOne";
import mail from "./FormStepOne";
import cpf from "./FormStepOne";
import renda from "./FormStepOne";
import date from "./FormStepTwo";
import phone from "./FormStepTwo";
import profession from "./FormStepTwo";

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
      profession
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
    </div>
  );
}
