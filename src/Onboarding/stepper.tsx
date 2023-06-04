import { IconProperties } from "../components/icons/Icon";
import { IconNames } from "../components/icons/icons";
import { ScreenSize, useMediaQuery } from "../hooks/useScreenSize";
import { TabProps } from "./Tab";

export type StepperItemProperties = {
  title: string;
  subTitle?: { text: string; className?: string };
  iconName?: IconNames;
  iconSize?: IconProperties["size"];
  iconColor?: IconProperties["color"];
  disabled?: boolean;
  indicatorColor?: TabProps["indicatorColor"];
};

type StepperProperties = {
  items: StepperItemProperties[];
  panels: React.ReactNode;
};

export const Stepper = ({ items, panels }: StepperProperties) => {
  const isLgUp = useMediaQuery(ScreenSize.lg, "gt");
  console.log("=======", isLgUp);
};
