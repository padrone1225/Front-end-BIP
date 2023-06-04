import { useMemo, useState } from "react";
import { useUpdateStepper } from "../hooks/useUpdateStepper";
import { Stepper, StepperItemProperties } from "./stepper";
import useStore from "../../modules/Store";
import { UserRoles } from "../../models/user/user";

const stepperSubtitles = {
  active: "onboarding.in_progress",
  done: "onboarding.done",
  base: "onboarding.not-started",
};

export const Onbording = () => {
  const roles = useStore((state) => state.roles);
  console.log("roel", roles);
  const isLicensee = roles.includes(UserRoles.LICENSEE);
  const isLicensor = roles.includes(UserRoles.LICENSOR);
  const [activeStepNumber, setActiveStepNumber] = useState<number>(0);

  const initStepperItems = useMemo<Array<StepperItemProperties>>(
    () => [
      {
        title: "onboarding.about-you",
        iconName: "User",
        subTitle: {
          text: stepperSubtitles.active,
          className: "text-P300",
        },
      },
      {
        title: "company-info",
        iconName: "AllDeals",
        subTitle: { text: stepperSubtitles.base },
        disabled: true,
      },
      {
        title: isLicensee || isLicensor ? "categories" : "your brands",
        iconName: "Deal",
        subTitle: { text: stepperSubtitles.base },
        disabled: true,
      },
      {
        title: "confirmation",
        iconName: "CheckCircle",
        subTitle: { text: stepperSubtitles.base },
        disabled: true,
      },
    ],
    [isLicensee, isLicensor]
  );

  const stepperItems = useUpdateStepper(
    initStepperItems,
    activeStepNumber,
    stepperSubtitles
  );

  console.log("----", stepperItems);

  return (
    <div className="w-full mx-auto flex items-center justify-center py-16 gap-36">
      <img src="logo.svg" alt="logo" className="h-40" />
      {/* <Stepper items={stepperItems} /> */}
    </div>
  );
};
