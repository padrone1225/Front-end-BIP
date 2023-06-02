import { useUpdateStepper } from "../hooks/useUpdateStepper";
import { Stepper } from "./stepper";

export const Onbording = () => {
  const stepperItems = useUpdateStepper();

  return (
    <div className="w-full mx-auto flex items-center justify-center py-16 gap-36">
      <img src="logo.svg" alt="logo" className="h-40" />
      <Stepper items={stepperItems} />
    </div>
  );
};
