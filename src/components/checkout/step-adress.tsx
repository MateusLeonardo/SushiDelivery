import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setSteps: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepAdress = ({ setSteps }: Props) => {
  return (
    <div>
      <h1>Adress</h1>
    </div>
  );
};
