import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { IconNames, Icons } from "./icons";

interface RecursiveKeyValuePair<T, K> {
  [key: string]: T | RecursiveKeyValuePair<T, K>;
}

interface IconProperties {
  className?: string;
  viewBox?: string;
  color?: string | RecursiveKeyValuePair<string, string>;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
  name: IconNames;
}

const fullConfig = resolveConfig(tailwindConfig);

export default function Icon({
  className,
  viewBox,
  size = "md",
  name,
  color = fullConfig.theme?.colors?.N500,
}: IconProperties) {
  const getSize = () => {
    switch (size) {
      case "xs":
        return fullConfig.theme && fullConfig.theme.spacing
          ? fullConfig.theme.spacing[12]
          : null;
      case "sm":
        return fullConfig.theme && fullConfig.theme.spacing
          ? fullConfig.theme.spacing[16]
          : null;
      case "md":
        return fullConfig.theme && fullConfig.theme.spacing
          ? fullConfig.theme.spacing[24]
          : null;
      case "lg":
        return fullConfig.theme && fullConfig.theme.spacing
          ? fullConfig.theme.spacing[32]
          : null;
      case "xl":
        return fullConfig.theme && fullConfig.theme.spacing
          ? fullConfig.theme.spacing[40]
          : null;
      default:
        break;
    }
  };
  // @ts-ignore
  if (fullConfig.theme?.colors && fullConfig.theme?.colors[color]) {
    // @ts-ignore
    color = fullConfig.theme.colors[color];
  }

  return (
    <svg
      className={className}
      // @ts-ignore
      width={getSize()}
      // @ts-ignore
      height={getSize()}
      viewBox={viewBox || "0 0 24 24"}
      fill="none"
    >
      {
        // @ts-ignore
        Icons[name](color)
      }
    </svg>
  );
}
