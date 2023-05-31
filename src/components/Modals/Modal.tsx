import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton";
import { InputField } from "../Field/InputField";
import Icon from "../icons/Icon";

interface ModalComponentProperties {
  title?: string;
  closeModal?: () => void;
}

export const ModalComponent = ({
  title,
  closeModal,
}: ModalComponentProperties) => {
  return (
    <div className="flex flex-col xs:w-319 md:w-536 w-607 m-auto mt-10 rounded-2xl shadow-drop-45">
      <div
        id="modal-header"
        className="rounded-t-2xl flex items-center justify-between w-full p-24 border-b border-b-N50"
      >
        <h1 className="text-N500 text-3xl font-bold font-headings">
          Modal Title
        </h1>
        <IconButton name="Close" size="lg" />
      </div>
      <div id="modal-body" className="py-40 px-24 flex flex-col gap-40">
        AA
        {/* <div className="flex flex-col gap-24">
          <InputField iconLeft="Mail" label="Enter your email" full />
        </div> */}
      </div>
      <div
        id="modal-footer"
        className="rounded-b-xl py-16 px-24 flex items-center justify-between border-t border-t-N50"
      >
        <div></div>
        <div className="flex gap-16">
          <Button title="Cancel" variant="secondary" />
          <Button title="Signup" />
        </div>
      </div>
    </div>
  );
};
