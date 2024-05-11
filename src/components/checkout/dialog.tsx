"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "@/components/checkout/step-user";
import { StepAdress } from "@/components/checkout/step-adress";
import { StepFinish } from "@/components/checkout/step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [steps, setSteps] = useState<CheckoutSteps>("user");

  let progressPct = 0;
  switch (steps) {
    case "user":
      progressPct = 33;
      break;
    case "adress":
      progressPct = 66;
      break;
    case "finish":
      progressPct = 100;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {steps === "user" && "Dados Pessoais"}
            {steps === "adress" && "Endereço de entrega"}
            {steps === "finish" && "Envio para o WhatsApp"}
          </DialogTitle>
        </DialogHeader>
        <Progress value={progressPct} />
        <div className="flex flex-col gap-3">
          {steps === "user" && <StepUser setSteps={setSteps} />}
          {steps === "adress" && <StepAdress setSteps={setSteps} />}
          {steps === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
