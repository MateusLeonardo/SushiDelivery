"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "@/components/cart/cart-item";
import { useState } from "react";
import { CheckoutDialog } from "@/components/checkout/dialog";

export const CartSidebar = () => {
  const { cart } = useCartStore((state) => state);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  let subTotal = 0;

  for (let item of cart) {
    subTotal += item.product.price * item.quantity;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-1 relative">
          <RocketIcon />
          <span className="block">Carrinho</span>
          {cart.length > 0 && (
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-xs">
          <div>Subtotal</div>
          <div>R$ {subTotal.toFixed(2)}</div>
        </div>
        <Separator className="my-4" />
        <div className="text-center">
          <Button
            disabled={cart.length === 0}
            onClick={() => setCheckoutOpen(true)}
          >
            Finalizar compra
          </Button>
        </div>
        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
      </SheetContent>
    </Sheet>
  );
};
