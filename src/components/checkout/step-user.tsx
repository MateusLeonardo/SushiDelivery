import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setSteps: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepUser = ({ setSteps }: Props) => {
  return (
    <div>
      <h1>User</h1>
    </div>
  );
};
