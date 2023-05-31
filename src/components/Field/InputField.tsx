import { useEffect, useRef, useState } from "react";
import Icon from "../icons/Icon";
import { IconNames } from "../icons/icons";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

interface InputFieldProperties {
  label?: string;
  iconLeft?: IconNames;
  iconRight?: IconNames;
  disabled?: boolean;
}

export const InputField = ({
  label,
  iconLeft,
  iconRight,
  disabled,
  ...inputProps
}: InputFieldProperties) => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const iconColor = mouseOver
    ? fullConfig.theme?.colors?.N500
    : fullConfig.theme?.colors?.N100;

  const commonClasses =
    "peer border border-N100 rounded-2xl shadow-base-25 py-12 font-bodyText text-sm hover:border-N500 focus:border-P300 focus:outline-none focus:placeholder:opacity-0 w-full transition-all duration-200 ease-linear  motion-reduce:transition-none [&:not([input-placeholder-active])]:placeholder:opacity-0" +
    (iconLeft ? " pl-40" : " pl-16") +
    (iconRight ? " pr-40" : " pl-16") +
    (disabled && " border-N75 bg-N25");

  const labelClasses =
    "absolute left-[0.03rem] top-0 truncate text-N100 mt-[0.72rem] duration-200 ease-out peer-focus:-translate-y-[1.2rem] text-sm pointer-events-none origin-[0_0] peer-focus:ml-16 bg-white" +
    (iconLeft ? " ml-40" : " ml-16");

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleDocumentClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setFocus(false);
      setMouseOver(false);
    }
  };

  return (
    <div
      className="max-w-[20.75rem] relative mt-20"
      onMouseEnter={() => {
        if (!focus) setMouseOver(true);
      }}
      onMouseLeave={() => {
        if (!focus) setMouseOver(false);
      }}
      ref={inputRef}
    >
      <input
        type="text"
        className={commonClasses}
        placeholder={label}
        onFocus={() => setFocus(true)}
      />
      {label && <label className={labelClasses}>{label}</label>}
      {iconLeft && (
        <Icon
          name={iconLeft}
          size="sm"
          viewBox="0 0 16 16"
          color={iconColor}
          className="absolute ml-16 top-1/2 -translate-y-1/2"
        />
      )}
      {iconRight && (
        <Icon
          name={iconRight}
          size="sm"
          viewBox="0 0 16 16"
          color={iconColor}
          className="absolute mr-16 top-1/2 right-0 -translate-y-1/2"
        />
      )}
    </div>
  );
};
