import * as React from "react";
import { useFormContext, type FieldPath, type FieldValues } from "react-hook-form";

// Gunakan unknown instead of any
export const FormFieldContext = React.createContext<{ 
  name: FieldPath<FieldValues> 
}>({
  name: "" as FieldPath<FieldValues>,
});

export const FormItemContext = React.createContext<{ id: string }>({
  id: "",
});

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};