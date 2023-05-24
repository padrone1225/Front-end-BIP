import classNames from "classnames";
import { useState } from "react";
import Icon from "../icons/Icon";

interface IconButtonProperties {
  size: "sm" | "md" | "lg";
}

const IconButton = ({ size }: IconButtonProperties) => {
  const [color, setColor] = useState<string>("N500");
  const commonClasses =
    "rounded-full flex items-center justify-center hover:bg-P50";
  const styleClasses =
    size === "sm"
      ? " border-1.5 hover:border-0 border-N50 p-7 hover:p-8"
      : size === "md"
      ? " p-4"
      : " p-8";
  const iconSize = size === "sm" ? "xs" : "md";
  const viewBox = size === "sm" ? "0 0 12 12" : "0 0 24 24";

  const hoverEvent = () => {
    setColor("P400");
  };

  const leaveEvent = () => {
    setColor("N500");
  };
  return (
    <button
      className={classNames(commonClasses + styleClasses)}
      onMouseEnter={hoverEvent}
      onMouseLeave={leaveEvent}
    >
      <Icon
        name="NotificationOn"
        size={iconSize}
        viewBox={viewBox}
        color={color}
      />
    </button>
  );
};

export default IconButton;
