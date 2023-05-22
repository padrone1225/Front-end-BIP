import Icon from "../icons/Icon";
import { IconNames } from "../icons/icons";

import * as tailwindConfig from "@tailwindConfig";
import resolveConfig from "tailwindcss/resolveConfig";
import classNames from "classnames";
import { useEffect, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig);

interface ButtonProperties {
  size?: "sm" | "lg";
  variant?: string;
  className?: string;
  iconLeft?: IconNames;
  iconRight?: IconNames;
  disable?: boolean;
  onClick?: () => void;
}

const Button = ({
  size = "lg",
  variant = "primary",
  className,
  iconLeft,
  iconRight,
  disable = true,
  onClick,
}: ButtonProperties) => {
  const [color, setColor] = useState<string>("white");
  const [disabled, setDisabled] = useState<string>("");

  const commonClasses = `rounded-full inline-flex items-center justify-center gap-8 border-1.5 ${
    size === "lg" ? "px-24 py-12" : "px-16 py-8"
  }`;
  const primaryClasses = ` bg-gradient-to-b from-100% to-0% text-white ${
    disable
      ? "from-P300 to-white border-P300"
      : "from-P300 hover:from-P400 to-white border-P300 hover:border-P400"
  }`;
  const secondaryClasses = disable
    ? " border-N500 text-N500"
    : " border-N500 hover:border-P300 text-N500 hover:text-P300";
  const mainClass = variant === "primary" ? primaryClasses : secondaryClasses;

  const iconSize = size === "sm" ? "xs" : "sm";

  useEffect(() => {
    if (disable) {
      setDisabled(" opacity-60");
    }
  }, [disable]);

  useEffect(() => {
    if (variant !== "primary") {
      setColor("N500");
    }
  }, [variant]);

  const hoverEvent = () => {
    if (!disable) {
      if (variant !== "primary") {
        setColor("P400");
      }
    }
  };

  const leaveEvent = () => {
    if (!disable) {
      if (variant !== "primary") {
        setColor("P300");
      }
    }
  };

  return (
    <button
      className={classNames(commonClasses + mainClass + disabled)}
      onMouseEnter={hoverEvent}
      onMouseLeave={leaveEvent}
    >
      {iconLeft && (
        <Icon
          name={iconLeft}
          viewBox="0 0 14 8"
          size={iconSize}
          color={color}
        />
      )}
      <h1 className="font-bold font-headings text-sm tracking-[0.02rem]">
        Button
      </h1>
      {iconRight && (
        <Icon
          name={iconRight}
          viewBox="0 0 14 8"
          size={iconSize}
          color={color}
        />
      )}
    </button>
  );
};

export default Button;
