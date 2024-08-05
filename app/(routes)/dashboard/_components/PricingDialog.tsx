import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PricingSection from "./PricingSection";
function PricingDialog() {
  return (
    <div>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Upgarde Your Plan</DialogTitle>
          <DialogDescription>
            <PricingSection />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </div>
  );
}

export default PricingDialog;
