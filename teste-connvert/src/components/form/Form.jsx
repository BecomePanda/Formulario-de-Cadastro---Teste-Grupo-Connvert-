import React, { useState } from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormEnd from "./FormEnd";

export default function Form() {
  const [screen, setScreen] = useState(0);

  return (
    <>
      {screen === 0 ? (
        <FormStepOne setScreen={setScreen}></FormStepOne>
      ) : screen === 1 ? (
        <FormStepTwo setScreen={setScreen}></FormStepTwo>
      ) : screen === 2 ? (
        <FormEnd setScreen={setScreen}></FormEnd>
      ) : (
        <></>
      )}
    </>
  );
}
