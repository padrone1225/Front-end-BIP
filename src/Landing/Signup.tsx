import { Checkbox } from "../components/Buttons/CheckboxButton";
import { InputField } from "../components/Field/InputField";
import { ModalComponent } from "../components/Modals/Modal";
import { useState } from "react";

interface SignupModalProperties {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProperties) => {
  const [remember, setRemember] = useState<boolean>(false);
  const [policy, setPolicy] = useState<boolean>(true);
  return (
    <ModalComponent
      title="Signup"
      closeModal={onClose}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex flex-col gap-24">
        <InputField iconLeft="Mail" label="Enter your email" full />
        <InputField iconLeft="Lock" label="Create a password" full />
      </div>
      <div className="flex items-center justify-between">
        <Checkbox
          label="Keep me logged in"
          checked={remember}
          onClick={() => setRemember(!remember)}
        />
        <Checkbox
          label="I have read and agree the"
          link="Privacy Policy"
          checked={policy}
          onClick={() => setPolicy(!policy)}
        />
      </div>
    </ModalComponent>
  );
};
