import { InputField } from "../components/Field/InputField";
import { ModalComponent } from "../components/Modals/Modal";

interface SignupModalProperties {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProperties) => {
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
        <div>A</div>
        <div>b</div>
      </div>
    </ModalComponent>
  );
};
