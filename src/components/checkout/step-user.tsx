import { useCheckoutStore } from "@/stores/checkout-store";
import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  setSteps: Dispatch<SetStateAction<CheckoutSteps>>;
};

const formSchema = z.object({
  name: z.string().min(2, "Preencha seu nome"),
});

export const StepUser = ({ setSteps }: Props) => {
  const { name, setName } = useCheckoutStore((state) => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setSteps("adress");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome completo." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline">
          Próximo
        </Button>
      </form>
    </Form>
  );
};
