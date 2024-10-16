import { Field } from "../../../ui-form/helpers/fields";

export const MESSAGE = (disabled) => ({
  ...Field.textarea("message", {
    label: "Message",
    placeholder: "Enter a message",
    rows: 5,
    required: false,
    disabled: disabled,
  }),
});
