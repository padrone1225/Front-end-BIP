import { StepperItemProperties } from "../Onboarding/stepper";

export const useUpdateStepper = (
  items: Array<StepperItemProperties>,
  activeStepNumber: number,
  itemSubtitles: { [x: string]: string }
) => {
  items[activeStepNumber] = {
    ...items[activeStepNumber],
    disabled: false,
  };

  const lastEnabledItem = items.findIndex((item) => item.disabled);

  items.forEach((item, index) => {
    if (index < activeStepNumber) {
      items[index] = {
        ...item,
        subTitle: {
          text: itemSubtitles.done,
          className: "text-AC300",
        },
      };
    } else if (index === activeStepNumber) {
      items[index] = {
        ...item,
        subTitle: {
          text:
            lastEnabledItem === index
              ? itemSubtitles.active
              : itemSubtitles.done,
          className: lastEnabledItem === index ? "text-P300" : "text-AC300",
        },
      };
    }
  });
  return items;
};
