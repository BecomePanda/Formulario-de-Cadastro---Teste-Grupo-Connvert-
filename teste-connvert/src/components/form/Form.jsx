import React, { useState } from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormEnd from "./FormEnd";
import Menu from "./Menu";

export default function Form() {
  const [screen, setScreen] = useState(0);

  return (
    <>
    <Menu></Menu>
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
