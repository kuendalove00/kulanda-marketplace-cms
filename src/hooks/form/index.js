import { useState } from "react";

export const useForm = ({ initalState = {} }) => {
  const [formData, setFormData] = useState(initalState);

  const setFormValue = (data = initalState) => {
    setFormData((prevState) => ({ ...prevState, ...data }));
  };

  const clearForm = () => {
    setFormData({ ...initalState });
  };

  return { formData, setFormData, setFormValue, clearForm };
};
