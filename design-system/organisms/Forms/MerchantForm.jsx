import { Collection } from "usetheform";
import InputField from "molecules/InputField";

export function MerchantForm() {
  return (
    <>
      <InputField
        type="hidden"
        name="redirectCancelUrl"
        value="https://www.google.it?redirectCancelUrl"
      />
      <InputField
        type="hidden"
        name="redirectConfirmUrl"
        value="https://www.google.it?redirectConfirmUrl"
      />
    </>
  );
}
