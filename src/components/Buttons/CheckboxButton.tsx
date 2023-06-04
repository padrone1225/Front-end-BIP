import { generateUniqueId } from "../../utils/generateUniqueId";
import Icon from "../icons/Icon";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

interface CheckboxProperties {
  label?: string;
  link?: string;
  checked: boolean;
  onClick?: () => void;
}

const fullConfig = resolveConfig(tailwindConfig);

export const Checkbox = ({
  label,
  link,
  checked,
  onClick,
}: CheckboxProperties) => {
  const uuid = generateUniqueId();

  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        id={uuid}
        className="hidden"
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor={uuid} className="cursor-pointer">
        <div
          className={`relative w-20 h-20 rounded-full border border-N300 hover:border-P300 ${
            checked && "border-P300"
          }`}
        >
          {checked && (
            <Icon
              name="Check"
              size="md"
              viewBox="0 0 35 35"
              color={fullConfig.theme?.colors?.P300}
            />
          )}
        </div>
      </label>
      {label && (
        <label className="text-sm flex gap-1">
          <span className="text-N500">{label}</span>
          {link && (
            <div className="text-P300 underline cursor-pointer">{link}</div>
          )}
        </label>
      )}
    </div>
  );
};
